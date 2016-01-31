/*
	配置文件
*/
(function() {
	this.$c = {
		data: {
			sharekey: 'X-v]4hcK$C'
		},
		path: function() {
			var port = location.port;
			if(port === '8080') {
				return '../';
			}
			return 'http://10.2.144.38:8080/github/open-wb/app/';
		},
		apiPath: function() {
			return '/v1/';
		},
		// js依赖加载
		addScriptTree: function(arr) {
			var script;
			if(arr.length === 0) return;
			script = document.createElement('script');
			script.type = 'text/javascript';
			if(arr[0].indexOf('http') === -1) {
				script.src = this.path() + arr[0];
			} else {
				script.src = arr[0];
			}
			document.body.appendChild(script);
			script.onload = function() {
				arr.shift();
				this.addScript(arr);
			}.bind(this);
		},
		// js加载
		addScript: function(arr) {
			var script;
			arr.map( (v, ix) => {
				script = document.createElement('script');
				script.type = 'text/javascript';
				if(v.indexOf('http') === -1) {
					script.src = this.path() + v;
				} else {
					script.src = v;
				}
				document.body.appendChild(script);
			});
		},
		// css加载
		addStyle: function(arr) {
			var style;
			arr.map((v, ix) => {
				style = document.createElement('link');
				style.setAttribute('type', 'text/css');
				style.setAttribute('rel', 'stylesheet');
				style.setAttribute('href', this.path() + v);
				document.getElementsByTagName("head")[0].appendChild(style);
				// document.head.appendChild(style);
			});
		}
	};
})()