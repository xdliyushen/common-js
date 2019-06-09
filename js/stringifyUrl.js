// TODO:对嵌套对象无效
function stringifyUrl(obj) {
    let url = '?';
    let keysArr = Object.keys(obj);

    keysArr.map((key) => {
        url += `${key}=${JSON.stringify(obj[key])}&`;
    })

    return url.slice(0, -1);
}