(function() {
	this._lib = {
		config: {
			path: this.path()
		},
		path: function() {
			var port = location.port;
			if(port === '8080') {
				return '../';
			}
			return 'http://10.2.144.38:8080/github/open-wb/app/';
		},
		addScript: function(arr) {
			if(arr.length === 0) return;
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.path() + arr[0];
			document.body.appendChild(script);
			script.onload = function() {
				arr.shift();
				this.addScript(arr);
			}.bind(this);
		}
	};
})()