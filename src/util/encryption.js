const staticXOR = (data, key) => {
    let result = data.split('').map(
        char => String.fromCodePoint(
            char.charCodeAt() ^ key))
    if (result.length % 4 != 0) result.splice(- result.length % 4) // remove garbage data (https://github.com/gd-programming/gd.docs/pull/107#issuecomment-1380542961)
    return result.join('')
}


const decompressData = data =>
    pako.inflate(
        Base64.toUint8Array(data),
        { to: 'string' })


const compressData = data =>
    Base64.fromUint8Array(
        pako.deflate(data))
    .replaceAll('/', '_')
    .replaceAll('+', '-')