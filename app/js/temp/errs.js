const errs = function() {}

/*
	@author
		abel
	@des
		前缀术语：
			un: 未放置，空参数
			unfully: 不完全，不完整，没有传递所有参数
			format: 格式不正确
 */

errs.err = (key = '', name = '') => {
	const obj = {
		format: '格式不正确! ' + name,
		un: '没有找到! ' + name,
		unMethod: '未提供该方法支持! '+ name,
		unFully: '未提供完善数据！'+ name
	}
	if(key) {
		return obj[key];
	} 
	console.err(obj['un'] + 'key');
}

errs.warn = (key, name) => {

}

errs.log = (key, name) => {

}

module.exports = errs;