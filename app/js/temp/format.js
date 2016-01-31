const format = function() {};

// 验证手机号格式
format.mobile = function(str) {
	var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
	if (reg.test(str)) {
		return true;
	} 
	return false;
}

module.exports = format;