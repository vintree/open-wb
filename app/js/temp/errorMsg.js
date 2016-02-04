const errorMsg = function() {}

errorMsg.err = function(key) {
	const obj = {
		mobileFormat: '手机号格式不正确！'
	}
	return obj[key];
}

module.exports = errorMsg;