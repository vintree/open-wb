
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
import Roots from './_roots.js';
const user = () => {};

user.show = (mid, requester, success, err) => {
	if(mid && requester) {
		const 
		url = Roots.ajax.get('user_show', {
			mid: mid,
			requester: requester
		}, success, err);
	} else {
		console.err(Roots.errs.err('unFully'), 'mid && requester');
	}
}

module.exports = user;