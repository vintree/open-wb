import Ajax from '../../ajax.js';
import Errs from '../../errs.js';

const common = () => {};

common.ajax = Ajax;
common.errs = Errs;

common.isFullParams = (allParams, needParams) => {
	for(let o in needParams) {// 遍历全部参数
		if(needParams.hasOwnProperty(o)) {
			if(!allParams.hasOwnProperty(o)) {// 是否有必要参数
				console.err(Errs.err('unFully'), o);
				return false;
			}
		}
	}
	return true;
}

module.exports = common;