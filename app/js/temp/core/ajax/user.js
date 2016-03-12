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
	let isFullParams = Common.isFullParams(params, {
		mid: 0,
		requester: 0
	});
	if(isFullParams) {
		const url = Common.ajax.get('user_show', params, success, err);
	} else {
		console.err(Common.errs.err('unFully'), 'mid && requester');
	}
}

/*
	@author
		abel
	@to
		abel || abel
	@des
		1. 处理关于user接口
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
	for(let o in params) {
		if(params.hasOwnProperty(o)) {
			if(params[o]) {}
			else {
				console.err(Common.errs.err('unFully'), o);
			}

		}
	}
}

module.exports = user;