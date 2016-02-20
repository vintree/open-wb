const cf = new _config;
const vars = function(key) {
    let obj = {
        userStorage: 'ws',
    }
    return obj[key];
};

vars.href = (key) => {
    let path = './';
    let obj = {
        login: path + 'login.html',
        baseData: path + 'baseData.html',
    }
}

vars.api = (key) => {
    let path = cf.apiPath,
        obj = {
            fileUpload: path() + 'file/post.json',
            userInfo: path() + 'users/userinfo.json',
            city: path() + 'zuji/city.json'
        }
    return obj[key];
}

vars.err = (key) => {
    const obj = {
        nickName: '请填写1-18个字符，中文占两个字符，英文占一个字符',
        gender: '请选择性别',
        city: '请选择城市'
    }
    return obj[key];
}

module.exports = vars;
