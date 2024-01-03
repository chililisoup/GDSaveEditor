/* TODO:

Warnings / fixers on dependent data when depended on data is changed (level seed, whatever else)

*/



const reader = new FileReader()
const parser = new DOMParser()

let parsedData = {}
let dirtyData = []
let dirtyDataCleaners = []
let filename = ''



const createCheckbox = (val, enforce, trueKey, mutableData) => {
    let valInput = document.createElement('input')
    valInput.type = 'checkbox'
    valInput.checked = Number(val) == 1
    valInput.onchange = e =>
        mutableData[trueKey] = enforce(Number(e.target.checked))
    
    return valInput
}


const createExtra = (val, enforce, trueKey, mutableData, extra) => {
    if (extra[1] === true)
        return createCheckbox(val, enforce, trueKey, mutableData)

    let select = document.createElement('select')

    for (const [k, v] of Object.entries(extra)) {
        let option = document.createElement('option')
        option.innerHTML = v
        option.value = k
        select.appendChild(option)
    }

    select.value = val
    select.onchange = e =>
        mutableData[trueKey] = enforce(e.target.value)

    return select
}


const formatGeneric = (data, mutableData, name) => {
    if (data['kCEK']) return parseSpecial(mutableData, dirtyData, dirtyDataCleaners)
    if (name == 'stats') return formatData(data, statKeys)
    if (name == 'header') return formatData(data, levelHeaderKeys)
    if (name == 'colors') return formatData(data, levelColorIds)
    if (name == 'levelData') return formatData(data, { 0: 'header' })
    if (data['_websiteExtra_'] && data['_websiteExtra_']['dict']) return formatData(data, data['_websiteExtra_']['dict'])
    return formatData(data, keys)
}


const displayValue = (body, val, key, trueKey, mutableData, extra) => {
    if (typeof(val) == "object") {
        let button = document.createElement('button')
        button.classList = ['opener']
        button.innerHTML = '+'

        let content
        let on = false

        button.onclick = () => {
            if (!content) {
                content = displayData(val, mutableData[trueKey], key)
                body.appendChild(content)
            }

            on = !on
            body.style.display = on ? '' : 'none'
            button.innerHTML = on ? '-' : '+'
        }

        return button
    }

    if (typeof(extra) == "object") switch(typeof(val)) {
        case 'string': return createExtra(val, String, trueKey, mutableData, extra)
        case 'number': return createExtra(val, Number, trueKey, mutableData, extra)
        case 'bigint': return createExtra(val, BigInt, trueKey, mutableData, extra)
    }
    
    let valInput = document.createElement('input')

    switch(typeof(val)) {
        case 'string':
            valInput.type = 'text'
            valInput.value = val

            if (extra == "b64") {
                valInput.onchange = e => mutableData[trueKey] = btoa(e.target.value)
            } else valInput.onchange = e => mutableData[trueKey] = e.target.value

            return valInput
        case 'number':
            valInput.type = 'number'
            valInput.step = 0.001
            valInput.value = val
            valInput.onchange = e => mutableData[trueKey] = e.target.value
            return valInput
        case 'bigint':
            valInput.type = 'number'
            valInput.step = 1
            valInput.value = Number(val)
            valInput.onchange = e => {
                e.target.value = Math.round(e.target.value)
                mutableData[trueKey] = BigInt(e.target.value)
            }
            return valInput
        case 'boolean':
            return createCheckbox(val, Boolean, trueKey, mutableData)
        default:
            return Text(val)
    }
}


const displayData = (data, mutableData, name) => {
    let div = document.createElement('div')
    div.classList = ['tiles']

    let formattedData = formatGeneric(data, mutableData, name)
    let dataKeys = Object.keys(formattedData).sort()

    for (let i = 0; i < dataKeys.length; i++) {
        let key = dataKeys[i]
        if (key == '_websiteExtra_') continue

        let val = formattedData[key][0]
        let trueKey = formattedData[key][1]

        let span = document.createElement('span')
        let head = document.createElement('div')
        let body = document.createElement('div')
        let label = document.createElement('label')
        let p = document.createElement('p')

        
        if (["_isArr", "binaryVersion", "dataType", "levelType"].includes(key)) span.classList = ['hidden']

        body.style.display = 'none'

        if (!val) label.innerHTML = key
        else if ([4n, 10n, 12n].includes(val['kCEK']) && (val['k2'] || val['2']))
            label.innerHTML = val[val['k2'] ? 'k2' : '2']
        else label.innerHTML = key

        let deleter = document.createElement('button')
        deleter.innerHTML = 'X'
        deleter.classList = ['deleter']
        deleter.onclick = () => {
            let dirty = dirtyData.indexOf(mutableData[trueKey])
            if (dirty != -1) {
                dirtyDataCleaners.splice(dirty, 1)
                dirtyData.splice(dirty, 1)
            }

            delete mutableData[trueKey]
            span.remove()
        }

        p.appendChild(
            displayValue(body, val, key, trueKey, mutableData, formattedData[key][2]))

        head.appendChild(deleter)
        head.appendChild(label)
        head.appendChild(p)
        span.appendChild(head)
        span.appendChild(body)
        div.appendChild(span)
    }

    return div
}


const loadSave = e => {
    let decryptedData = e.target.result

    if (!decryptedData.startsWith('<?xml '))
        decryptedData = decompressData(
            staticXOR(decryptedData, 11))
    
    parsedData = parseXML(
        parser.parseFromString(decryptedData, 'text/xml')
        .children[0]
        .children[0])

    let output = document.getElementById('output')
    output.innerHTML = ''
    output.appendChild(
        displayData(parsedData, parsedData, 'root'))
}


const upload = e => {
    let file = e.target.files[0]
    filename = file.name.split('.').shift()
    e.target.value = null
    dirtyData = []
    dirtyDataCleaners = []

    reader.onload = loadSave
    reader.readAsText(file)
}


const download = (data, extension) => {
    data = URL.createObjectURL(
        new Blob([data]), { type: 'text/plain' })

    const link = document.createElement('a')
    link.href = data
    link.download = filename + extension
    link.click()
}


const downloadXML = () =>
    download(
        generateXML(parsedData, dirtyData, dirtyDataCleaners),
        '.xml')


const downloadSave = () =>
    download(
        staticXOR(compressData(
            generateXML(parsedData, dirtyData, dirtyDataCleaners)),
            11),
        '.dat')


const toggleCSS = e =>
    document.documentElement.style.setProperty(
        '--' + e.target.id, e.target.checked ? 'unset' : 'none')



document.getElementById('upload').onchange = upload
document.getElementById('downloadXML').onclick = downloadXML
document.getElementById('downloadSave').onclick = downloadSave
document.getElementById('deletersDisplay').onchange = toggleCSS
document.getElementById('hiddenDisplay').onchange = toggleCSS