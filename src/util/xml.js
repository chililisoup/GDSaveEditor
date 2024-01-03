const parseXML = data => {
    if (!data || !data.children || !data.children.length) return
    let result = {}

    for (let i = 0; i < data.children.length; i += 2) {
        let val = data.children[i + 1]

        result[data.children[i].innerHTML] = val && val.children.length ? parseXML(val) : parseXMLValue(val)
    }

    return result
}


const parseXMLValue = tag => {
    let v = tag.innerHTML
    switch (tag.tagName) {
        case 'r': return parseFloat(v)
        case 'i': return BigInt(v)
        case 's': return v
        case 't': return true
        case 'f': return false
        case 'd': return {}
    }
}


const encodeXML = (data, dirtyData, dirtyDataCleaners) => {
    let xml = ''
    for (const [key, val] of Object.entries(data)) {
        let used = val

        let dirty = dirtyData.indexOf(data[key])
        if (dirty != -1) {
            used = dirtyDataCleaners[dirty](dirtyData[dirty])
        }

        xml += '<k>' + key + '</k>' + encodeXMLValue(used, dirtyData, dirtyDataCleaners)
    }
    return xml
}


const encodeXMLValue = (val, dirtyData, dirtyDataCleaners) => {
    switch(typeof(val)) {
        case 'boolean': return val ? '<t />' : '<f />'
        case 'string': return '<s>' + val + '</s>'
        case 'number': return '<r>' + val + '</r>'
        case 'bigint': return '<i>' + val + '</i>'
        case 'object': return '<d>' + encodeXML(val, dirtyData, dirtyDataCleaners) + '</d>'
    }
}


const generateXML = (data, dirtyData, dirtyDataCleaners) => 
    '<?xml version="1.0"?><plist gjver="2.0" version="1.0"><dict>'
    + encodeXML(data, dirtyData, dirtyDataCleaners)
    + '</dict></plist>'