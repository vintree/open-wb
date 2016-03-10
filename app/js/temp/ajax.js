/*
	@structure
		
		底层  - 中间层
			 / ajax_common 公共部分：请求结束后的执行结构
			/
		ajax - get 对外提供get方法
			 - post 对外提供post方法

	@author
		abel
	@des
		1. 代理请求
		2. 处理请求中间过程
	@api
		ajax || post || get
		ajax:
			* method: String 请求方法
			* name: String 接口名称
			* params: Object 接口需要参数
			* success: Function 成功方法
			* error: Function 失败方法
		post:
			* name
			* params
			* success
			* error
		get: 
			* name
			* params
			* success
			* error
	@version
		2016-03-10
 */
import Superagent from 'superagent';

import Vars from './vars.js';
import FormatAjax from './formatAjax.js';
import Errs from './errs.js';

const ajax = () => {};
ajax.ajax = (method = '', name = '', params = {}, success = ()=>{}, error = (data)=>{alert(data.status.msg)}) => {
	let url = Vars.api(name);
	if(url) {
		if(method === 'get' || method === undefined) {
			url = FormatAjax.get(Vars.api(name), params);
			Superagent.get(url).end((err, res) => {
				roots.ajax_common(res, success, error);
			});
		} else if(method === 'post') {
			Superagent.post(url).send(params).end((err, res) => {
				roots.ajax_common(res, success, error);
			});
		} else {
			console.err(Errs.err('unMethod', method))
		}
	} else {
		console.err(Errs.err('un', name));
	}
}

ajax.ajax_common = (res, success, error) => {
	if(res.status === 200) {
		let data = JSON.parse(res.text);
		if(data.status.code === '0') {
			success(data);
		} else {
			error(data);
		}
	}
}

ajax.get = (name, params, success, error) => {
	roots.ajax('get', name, params, success, error);
}

ajax.post = (name, params, success, error) => {
	roots.ajax('post', name, params, success, error);
}

module.exports = ajax;