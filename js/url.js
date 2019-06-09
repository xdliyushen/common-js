// 将url参数解析为对象
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

// 将对象解析为url参数 (TODO:对嵌套对象无效)
function stringifyUrl(obj) {
    let url = '?';
    let keysArr = Object.keys(obj);

    keysArr.map((key) => {
        url += `${key}=${JSON.stringify(obj[key])}&`;
    })

    return url.slice(0, -1);
}

export {
    parseUrl,
    stringifyUrl,
}