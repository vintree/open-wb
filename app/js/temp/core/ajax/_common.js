import Ajax from '../../ajax.js';
import Errs from '../../errs.js';

const common = (allParams, needParams, method, name, success, err) => {
	let isFullParams = common.isFullParams(allParams, needParams);
	if(isFullParams) {
		if(method === 'get') {
			Ajax.get(name, allParams, success, err);
		} else if(method === 'post') {
			Ajax.post(name, allParams, success, err);
		}
	}
};

common.isFullParams = (allParams, needParams) => {
	for(let o in needParams) {
		if(needParams.hasOwnProperty(o)) {
			if(!allParams.hasOwnProperty(o)) {
				console.error(Errs.err('unFully'), o);
				return false;
			}
		}
	}
	return true;
};


common.ajax = Ajax;
common.errs = Errs;
module.exports = common;