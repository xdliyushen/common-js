function parseUrl(url) {
    let _url = url.slice(url.indexOf('?') + 1);
    let argsArr = _url.match(/(\w+)=(\w)/g);
    let argsObj = {};

    argsArr.map((str) => {
        let key = str.slice(0, str.indexOf('='));
        let value = str.slice(str.indexOf('=') + 1);

        argsObj[key] = value;
    })

    return argsObj;
}