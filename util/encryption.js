const staticXOR = (data, key) =>
    data.split('').map(
        char => String.fromCodePoint(
            char.charCodeAt() ^ key))
    .join('')


const decompressData = data =>
    pako.inflate(
        Base64.toUint8Array(data),
        { to: 'string' })


const compressData = data =>
    Base64.fromUint8Array(
        pako.deflate(data))
    .replaceAll('/', '_')
    .replaceAll('+', '-')