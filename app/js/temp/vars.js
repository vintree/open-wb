import Storage from '../temp/storage.js';
const cf = new _config;
const vars = function(key) {
    let obj = {
        userStorage: 'ws',
        user: 'ws'
    };
    return obj[key];
};

vars.storage = (key) => {
    let obj = {
        userStorage: 'ws',
        user: 'ws'
    };
    return obj[key];
};

vars.storageValue = (key1, key2) => {
    let 
    sobj = Storage.get(vars.storage(key1));
    // console.log(sobj);
    return key2 ? sobj[key2] : sobj;
};

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
    return obj[key];
};

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
    };
    return obj[key];
};

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
};

// 接口地址
vars.api = (key) => {
    let
    path = vars.path('apiPath'),
    obj = {
        fileUpload: 'file/post.json',
        userInfo: 'users/userinfo.json',
        city: 'zuji/city.json',
        hotTagList: 'biaoqian/list.json',
        hotList: 'biaoqian/search.json',
        userShow: 'users/show.json',//获取某个用户的个人信息
        follow_list: 'users/following/list.json',//获取用户关注的人的列表
        tag_list: 'users/tag/list.json',//获取用户加入的群组(标签)
        event_list: 'users/event/list.json',//获取用户活动列表
        get_my_notes: 'notes/get_my_notes.json',//用户的动态
        user_show: 'users/show.json',//获取用户信息
    };
    return path + obj[key];
};

module.exports = vars;

// {"mid":76350,"username":"18810373055","nickname":"eqwe","pinyin":"eqwe","avatar":"http://image.useastore.com/user/avatar/ADCAC15A-677B-4DC5-BBA2-9ED1FD4516BE1456735556333.jpg","vip":0,"gender":"m","age":1,"constellation":"\\u53cc\\u9c7c\\u5ea7","address":"\\u6fb3\\u95e8\\u5e02","sign":"\\u6211\\u662f\\u5c0f\\u6d4b","xingming":"","background":null,"leagues":null,"groups":null,"height":0,"mobile":"18810373055","extension":"{\"school\":\"& #40;null& #41;\",\"position\":\"\\u5348\\u591c\\u5de5\\u4f5c\\u8005\",\"Mylabel\":\"& #40;null& #41;\",\"company\":\"& #40;null& #41;\",\"experience\":\"& #40;null& #41;\",\"project\":\"& #40;null& #41;\",\"industry\":\"& #40;null& #41;\",\"interest\":\"\\u5c0f\\u9017\\u9752\\u5e74\"}","isRegister":0,"ofpassword":"b942077d406d5d069a3c71ae3d332811","ngroups":null,"ofusername":"7f3304db83383f8624b5eb5a41ea2758"}