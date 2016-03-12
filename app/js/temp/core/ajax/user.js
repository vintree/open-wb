import Common from './_common.js';
const user = () => {};

/*
	@author
		abel
	@to
		abel || abel
	@des
		1. 处理关于user接口
	@api 
		show
			* mid: int 用户ID=原始用户ID+md5(原始用户ID+sharekey)
			* requester: string 发起请求用户的Openfire ID
	@version
		2016-03-09
 */
user.show = (params, success, err) => {
	let needParams = {
		mid: 0,
		requester: 0
	};
	Common(params, needParams, 'get', 'user_show', success, err);
};
/*
	@author
		abel
	@to
		abel
	@des
		登录，注册接口
	@api 
		show
			* timestamp: string、时间戳、~ + md5(~ + sharekey)
			* username: string、用户名
			* mobile: string、手机号
			* device: string、移动端标识
			* deviceuuid: string、开发版本
			* source: string、标识
			* type: string、类型
	@version
		2016-03-12
 */
user.register = (params, success, err) => {
	let needParams = {
		timestamp: 0,
		username: 0,
		mobile: 0,
		device: 0,
		deviceuuid: 0,
		source: 0,
		type: 0
	};
	Common(params, needParams, 'get', 'user_register', success, err);
};

user.info = (params, success, err) => {
	let needParams = {
		timestamp: 0,
		username: 0,
		mobile: 0,
		device: 0,
		deviceuuid: 0,
		source: 0,
		type: 0
	};
	Common(params, needParams, 'get', 'user_info', success, err);
};
module.exports = user;