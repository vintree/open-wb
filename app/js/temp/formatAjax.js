const formatAjax = function() {};

formatAjax.get = function(url, obj) {
	var 
		str = '?';
	if(arguments.length !== 1) {
		for(let o in obj) {
			if(obj.hasOwnProperty(o)) {
				str += o + '=' + obj[o] + '&';  
			}
		}
		return url + str;
	}
	return url;
}

formatAjax.post = function(url, obj) {

}

module.exports = formatAjax;