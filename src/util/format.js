const combineToDict = data => {
    let result = {}
    for (let i = 0; i < data.length; i += 2) {
        result[data[i]] = data[i + 1]
    }
    return result
}


const joinDict = (data, sep) => {
    let result = []
    for (const [key, val] of Object.entries(data)) {
        if (key == 'gdSaveEditor$extra') continue
        result.push(key + sep + val)
    }
    return result.join(sep)
}

/*
const escapeList(data) {
    let result = {}
    for (const [k, v] of Object.entries(data)) result[k] = v[0]
    return result
}
*/

const formatGeneric = (data, mutableData, name) => {
    if (data['kCEK']) return formatSpecial(mutableData, dirtyData, dirtyDataCleaners)
    if (name == 'stats') return formatData(data, statKeys)
    if (name == 'header') return formatData(data, levelHeaderKeys)
    if (name == 'colors') return formatData(data, levelColorIds)
    if (name == 'unlockValueKeeper') return formatData(data, unlockValueKeeperKeys)
    if (name == 'valueKeeper') return formatValueKeeper(data)
    if (name == 'levelData') return formatData(data, { 0: 'header' })
    if (data['gdSaveEditor$extra'] && data['gdSaveEditor$extra']['dict']) return formatData(data, data['gdSaveEditor$extra']['dict'])
    return formatData(data, keys)
}


const formatSpecial = (mutableData, dirtyData, dirtyDataCleaners) => {
    switch (mutableData['kCEK']) {
        case 4n: return formatLevel(mutableData, dirtyData, dirtyDataCleaners)
        case 6n: return formatData(mutableData, songKeys)
        case 7n: return formatData(mutableData, questKeys)
        case 8n: return formatData(mutableData, chestKeys)
        case 9n: return formatData(mutableData, rewardKeys)
        case 10n: return formatData(mutableData, smartTemplateKeys)
        case 11n: return formatData(mutableData, smartTemplatePatternKeys)
        case 12n: return formatData(mutableData, levelKeys)
        default: return formatData(mutableData, {})
    }
}


const parseDataEntry = (key, val, dict) => {
    if (key == 'kCEK')
        return ['dataType', [val, key, kcekKeys[val] ? kcekKeys : null]]

    let valueType = dict[key]
    if (!valueType) return [key, [val, key]]
    if (typeof(valueType) == 'string') return [valueType, [val, key]]

    let entryVal = val
    let extra

    if (valueType.b64) {
        entryVal = atob(val)
        extra = "b64"
    }
    if (valueType.arr && valueType.arr[val] != null) extra = valueType.arr
    if (valueType.enforce) entryVal = valueType.enforce(entryVal)

    return [valueType.name, [entryVal, key, extra]]
}


const formatData = (data, dict) => {
    let result = {}

    for (const [key, val] of Object.entries(data)) {
        const parsedEntry = parseDataEntry(key, val, dict)
        result[parsedEntry[0]] = parsedEntry[1]
    }

    return result
}


const formatValueKeeper = data => {
    let result = {}

    for (const [key, val] of Object.entries(data)) {
        const splitKey = key.split('_')
        const keyType = splitKey[0]
        const keyName = splitKey[1]

        let name
        let dict
        const dataKeeperType = dataKeeperTypes[keyType]
        if (dataKeeperType) {
            name = dataKeeperType[0]
            dict = dataKeeperType[1]
        } else {
            name = 'misc'
            dict = {}
        }

        if (!result[name]) result[name] = {
            gdSaveEditor$group: true,
            gdSaveEditor$name: name,
            gdSaveEditor$data: {}
        }

        const parsedEntry = parseDataEntry(keyName, val, dict)
        result[name].gdSaveEditor$data[parsedEntry[0]] = parsedEntry[1]
        result[name].gdSaveEditor$data[parsedEntry[0]][1] = key
    }

    return result
}


const formatColor = data => {
    data = combineToDict(data.split('_'))
    data['gdSaveEditor$extra'] = { dict: levelColorKeys }
    return data
}

/*
const analyzeLevel(data) {
    let level = {
        header: data[0],
        objectCounts: {}
    }

    for (let i = 1; i < data.length - 1; i++) {
        let key = data[i][1]

        if (level.objectCounts[key]) level.objectCounts[key]++
        else level.objectCounts[key] = 1
    }

    return level
}
*/

const parseLevel = data => {
    let result = data.split(';').map(val => combineToDict(val.split(',')))
    result.pop()
    return result
}


const formatLevel = (mutableData, dirtyData, dirtyDataCleaners) => {
    let result = formatData(mutableData, levelKeys)
    if (!result.levelData) return result

    let levelData = parseLevel(
        decompressData(result.levelData[0]))
    let header = levelData[0]

    for (let i = 29; i < 38; i++) {
        if (!header['kS' + i]) continue
        header['kS' + i] = formatColor(header['kS' + i])
    }

    if (header['kS38']) {
        let colors = {}
        header['kS38'].split('|').slice(0, -1).forEach(val => {
            val = formatColor(val)
            colors[val['6']] = val
        })

        header['kS38'] = colors
    }

    mutableData['k4'] = levelData
    dirtyData.push(mutableData['k4'])
    dirtyDataCleaners.push(cleanLevel)
    result.levelData[0] = [header]

    return result
}


const cleanLevel = data => {
    let header = data[0]

    for (let i = 29; i < 38; i++) {
        if (!header['kS' + i]) continue
        header['kS' + i] = joinDict(header['kS' + i], '_')
    }

    if (header['kS38']) {
        let result = []
        for (const [_, val] of Object.entries(header['kS38'])) result.push(joinDict(val, '_'))
        header['kS38'] = result.join('|') + '|'
    }

    let result = [header]
    for (let i = 1; i < data.length; i++) result.push(data[i])
    result = result.map(val => joinDict(val, ',')).join(';') + ';'

    return compressData(result)
}