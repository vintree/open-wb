const url = function() {};
url.getParams = function(key) {
	const search = location.search;
	if(search.indexOf('?') != -1) {
		let str = search.substr(1).split('&');
		for(let s of str) {
			if(s.indexOf(key) != -1) {
				return s.split('=')[1];
			}
		}
	}
}

module.exports = url;

