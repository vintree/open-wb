const url = function() {}

url.getParams = function(key) {
	const search = location.search;
	if(search.indexOf('?') != -1) {
		let str = search.substr(1).split('&');
		for(let i = 0, l = str.length; i < l; i++) {
			if(str[i].indexOf(key) !== -1) {
				return str[i].split('=')[1];
			}
		}
	}
}

module.exports = url;
