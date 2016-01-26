/*
var headData = {
  //页面title
  tit: '',
  //分享出去的title
  shareName: '',
  //分享出去的url
  shareUrl: '',
  //分享出去的图片
  shareImg: '',
  //分享出去的描述
  shareDesc: '',
  //SEO关键字
  keywords: '',
  //SEO描述
  desc: '',
  //第二代微信配置
  admins: '',
  //页面ico
  favicon: '',
  //自己的扩展配置，支持List，String
  // extend: ''
}
*/
var Head = function() {}

Head.init  = function(data) {
    var head = '', i, l, extend;
    extend = data.extend;
    head += '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width" />';
    head += '<meta name="format-detection" content="telephone=no" />';
    head += '<meta name="og:url" property="og:url" content="'+data.shareUrl+'" />';
    head += '<meta name="og:site_name" property="og:site_name" content="'+(data.shareName || data.tit)+'" />';
    head += '<meta name="og:title" property="og:title" content="'+(data.shareName || data.tit)+'" />';
    head += '<meta name="og:image" property="og:image" content="'+(data.shareImg || data.defaultImg)+'" />';
    head += '<meta name="og:desc" property="og:desc" content="'+data.shareDesc+'" />';
    head += '<meta name="keywords" property="keywords" content="'+data.keywords+'" />';
    head += '<meta name="description" property="description" content="'+data.desc+'" />';
    head += '<meta property="qc:admins" content="'+data.admins+'"/>';
    head += '<title>'+ data.tit +'</title>';
    head += '<link rel="shortcut icon" type="image/x-icon" href="'+data.favicon+'"/>';
    head += '<link type="text/css" rel="stylesheet" href="../font/css/font-awesome.min.css">';
    if(!!extend) {
        if(Object.prototype.toString.call(extend) === '[object Array]') {
            data.extend.map((v, i) => {head += v});
        } else if(Object.prototype.toString.call(extend) === '[object String]') {
            head += extend;
        }
    }
    document.head.innerHTML = document.head.innerHTML + head;
    document.title = data.tit;
}

module.exports = Head;
