/*
	Unicode编码转换
*/ 
const unicode = function() {};

// 加码
unicode.toDec = function(str) {
	if(str) {
		var res=[];
	    for(var i=0;i < str.length;i++)
	        res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
	    return "\\u"+res.join("\\u");
	}
	return '';
	
}

// 解码
unicode.toHex = function(str) {
	if(str) {
		str=str.replace(/\\/g, '%');
    	return unescape(str).replace(/%/g, '');
	} 
	return '';
}

module.exports = unicode;