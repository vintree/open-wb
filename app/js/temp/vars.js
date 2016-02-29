import Storage from '../temp/storage.js';
const cf = new _config;
const vars = function(key) {
    let obj = {
        userStorage: 'ws',
    }
    return obj[key];
};

vars.storage = (key) => {
    let obj = {
        userStorage: 'ws',
    }
    return obj[key];
}

// 系统参数
vars.sys = (key) => {
    let
    obj = {
        cid: 17,
        sharekey: 'X-v]4hcK$C'
    },
    sobj = Storage.get(vars.storage('userStorage'));
    for(let o in sobj) {
        if(sobj.hasOwnProperty(o)) {
            obj[o] = sobj[o];
        }
    }
    // console.log(obj);
    return obj[key];
}

// 基本地址
vars.path = (key) => {
    let staticPath,
        port,
        obj;
    port = location.port,
        // host = 'http://10.2.144.38:8080/';
        staticPath = 'http://127.0.0.1:8080/';
    if(port === '8080') {
        staticPath = '../';
    } else {
        staticPath += 'github/open-wb/app/';
    }
    obj = {
        href: './',
        apiPath: '/v1/',
        staticPath: staticPath
    };
    return obj[key];
};

// 错误信息
vars.err = (key) => {
    const obj = {
        nickName: '请填写1-18个字符，中文占两个字符，英文占一个字符',
        gender: '请选择性别',
        city: '请选择城市'
    }
    return obj[key];
}

// 跳转地址
vars.href = (key) => {
    let
    path = vars.path('href'),
    obj = {
        login: path + 'login.html',
        baseData: path + 'baseData.html',
        user: path + 'user.html?nav=me',
        hotGroup: path + 'hotGroup.html',
        fansGroup: path + 'fansGroup.html',
        guide: path + 'guide.html',
    };
    return obj[key];
}

// 接口地址
vars.api = (key) => {
    let
    path = vars.path('apiPath'),
    obj = {
        fileUpload: path + 'file/post.json',
        userInfo: path + 'users/userinfo.json',
        city: path + 'zuji/city.json',
        hotTagList: path + 'biaoqian/list.json',
        hotList: path + 'biaoqian/search.json'
    };
    return obj[key];
}

module.exports = vars;

// {"mid":76350,"username":"18810373055","nickname":"eqwe","pinyin":"eqwe","avatar":null,"vip":0,"gender":"m","age":0,"constellation":"","address":"澳门市","sign":"","xingming":"","background":null,"leagues":null,"groups":null,"height":0,"mobile":"18810373055","extension":"","isRegister":0,"ofpassword":"b942077d406d5d069a3c71ae3d332811","ofusername":"7f3304db83383f8624b5eb5a41ea2758","ngroups":null}
