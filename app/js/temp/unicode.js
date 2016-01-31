/*
	Unicode编码转换
*/ 
const unicode = function() {};

// 加码
unicode.toDec = function(str) {
	var res=[];
    for(var i=0;i < str.length;i++)
        res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
    return "\\u"+res.join("\\u");
}

// 解码
unicode.toHex = function(str) {
	str=str.replace(/\\/g, "%");
    return unescape(str);
}

module.exports = unicode;