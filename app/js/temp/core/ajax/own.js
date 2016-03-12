import Common from './_common.js';
const own = () => {};
own.city = (params, success, err) => {
	Common(params, {}, 'get', 'city', success, err);
};

module.exports = own;