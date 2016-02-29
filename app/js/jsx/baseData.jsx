import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";
import Superagent from 'superagent';
import $ from 'jquery';
// import $ from 'webpack-zepto';

import Head from '../temp/head.js';
import autoFont from '../temp/autoFont.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';
import Vars from '../temp/vars.js';
import Storage from '../temp/storage.js';
import Md5 from '../temp/md5.js';


autoFont.init();
InjectTapEventPlugin();
window.$ = $;
window.jQuery = $;

require('../../sass/baseData.scss');
require('../temp/ajaxfileupload.js');

Head.init({
    tit: '我司-设置基本信息',
    shareName: '我司-设置基本信息',
    shareUrl: '',
    shareImg: '',
    shareDesc: '',
    keywords: '',
    desc: '',
    admins: '',
    favicon: ''
});


class HeadImg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vars: props.vars,
			img: {
				url: path + 'img/defaultHead@3x.png'
			}
		}
		// console.log(props);
	}

	imgChange(e) {
		const fileNode = e.target;
		const imgData = this.state.img;
		const sharekey = this.state.vars['sharekey'];

		// console.log(fileNode.value);
		// console.log(fileNode.files);


		if(fileNode.files) {
			if(window.FileReader) {
				let reader = new FileReader(),
					name = fileNode.files[0].name,
					fileUrl = fileNode.value,
					mid = Storage.get('ws')['mid'],
					key = name + Md5.init(name + sharekey),
					url;

				// console.log(name);
				reader.onload = (e1) => {
					// console.log(e1);
					// console.log(key);
					imgData.url = e1.target.result;
					this.setState({
						img: imgData
					});

					console.log(imgData);

					url = FormatAjax.get(Vars.api('fileUpload'), {
						key: key,
						type: 6,
						local_file_url: fileUrl,
						// local_file_url: imgData.url,
						local_file_name: name,
						thumb_size: '80*80'
					});

					console.log($(document.body));

					// require('../temp/zepto.ajaxfileupload.js');
					// $.ajaxFileUpload({
					//         url: Vars.api('fileUpload'), //用于文件上传的服务器端请求地址
					//         secureuri: false,           //一般设置为false
					//         fileElementId: $("input#file").attr("id"), //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
					//                                                 //$("form").serialize(),表单序列化。指把所有元素的ID，NAME 等全部发过去
					//         dataType: 'json',//返回值类型 一般设置为json
					// 		data: {
					// 			key: key,
					// 			type: 6,
					// 			local_file_url: fileUrl,
					// 			local_file_name: name,
					// 			thumb_size: '80*80'
					// 		},
					//         complete: function () {//只要完成即执行，最后执行
					//         },
					//         success: function (data, status) {  //服务器成功响应处理函数
					// 			if(data.status.code === '0') {
					// 				data = data.data;
					// 				console.log(data);
					// 			} else {
					// 				alert(Unicode.toHex(data.status.msg));
					// 			}
					//         },
					//         error: function (data, status, e) {//服务器响应失败处理函数
					//             alert(e);
					//         }
					//     }
					// )

					Superagent.get(url).end((err, res) => {
						if(res.status === 200) {
							var data = JSON.parse(Unicode.toHex(res.text));
							if(data.status.code === '0') {
								data = data.data;
								console.log(data);
							} else {
								alert(Unicode.toHex(data.status.msg));
							}
							// this.setState({
							// 	cityList: data.data.china
							// });
						}
					});

				};
				reader.readAsDataURL(fileNode.files[0]);
			}
		}
	}
	render() {
		return (
			<div id="baseData-headImg">
				<img src={this.state.img.url} />
				<input id='file' name='file' type="file" multiple="multiple" accept="image/jpg,image/png,image/jpeg"
 onChange= { (e) => {this.imgChange(e)} } />
			</div>
		)
	}
}

class Main extends React.Component {
	constructor() {
		super();
		var cf = new _config;
		this.state = {
			vars: cf.vars(),
			nick: {
				name: '',
				placeholder: '怎么称呼您？',
				scope: [1, 18]
			},
			next: {
				url: path + 'img/next@3x.png'
			},
			cityList: []
		}
		this.initCity();
	}

	initCity() {
		const apiPath = this.state.vars.apiPath;
		var url =  Vars.api('city');
		// url = FormatAjax.get(url);
		Superagent.get(url).end((err, res) => {
			if(res.status === 200) {
				var data = JSON.parse(Unicode.toHex(res.text));
				if(data.status.code === '0') {
					this.setState({
						cityList: data.data.china
					});
				} else {
					alert(data.status.msg);
				}
			}
		});
	}

	resultEn(value) {
		const str = value.match(/\w{1}/g);
		if(str) {
			return str.length;
		}
		return 0;
	}

	resultCn(value) {
		const str = value.match(/[\u4e00-\u9fa5]{1}/g);
		if(str) {
			return str.length * 2;
		}
		return 0;
	}

	nickChange(e) {
		const nick = this.state.nick;
		const value = e.target.value;
		const len = this.resultEn(value) + this.resultCn(value);
		const min = this.state.nick.scope[0];
		const max = this.state.nick.scope[1];
		if(len < max) {
			nick.name = value;
			this.setState({
				nick: nick
			});
		}
	}

	sexChange(e) {
		const value = e.target.value;
		document.querySelector('#baseData-sex').innerHTML = value;
	}

	cityChange(e) {
		const value = e.target.value;
		document.querySelector('#baseData-city').innerHTML = value;
	}

	nexts() {
		let
		url = '',
		mid = Storage.get('ws')['mid'],
		user = mid + Md5.init(mid + this.state.vars['sharekey']),
		nickName = document.querySelector('#nickName').value,
		gender = document.querySelector('#gender'),
		address = document.querySelector('#address');
		if(nickName.length >= this.state.nick.scope[0] && nickName.length <= this.state.nick.scope[1]) {
			gender = gender.options[gender.selectedIndex].getAttribute('data-code');
			address = address.value;
			url = FormatAjax.get(Vars.api('userInfo'), {
				user: user,
				nickname: nickName,
				gender: gender,
				address: address
			});
			Superagent.get(url).end((err, res) => {
				if(res.status === 200) {
					var data = JSON.parse(Unicode.toHex(res.text));
					console.log(data);
				}
			});
		} else {
			alert(Vars.err('nickName'));
			return false;
		}
	}

	render() {
		const cityList = this.state.cityList.map( (v, ix) => {
			return (
				<option key={v.id} value={v.city}>{v.city}</option>
			);
		});
		return (
			<div id="baseData-main">
				<div id="baseData-head">请问您是<span id="baseData-head-tag">?</span></div>
				<HeadImg vars={this.state.vars}/>
				<div id="baseData-body">
					<div className="baseData-unit">
						<input id='nickName' type="text" placeholder={this.state.nick.placeholder} value={this.state.nick.name} onChange={ e => { this.nickChange(e) }}></input>
					</div>
					<div className="baseData-unit">
						<div id="baseData-sex" className="baseData-tx">男</div>
						<select id='gender' onChange={ e => {this.sexChange(e)} }>
							<option value='男' data-code='m'>男</option>
							<option value='女' data-code='f'>女</option>
							<option value='未知' data-code='n'>未知</option>
						</select>
					</div>
					<div className="baseData-unit">
						<div id="baseData-city" className="baseData-tx">北京</div>
						<select id='address' onChange={ e => {this.cityChange(e)} }>
							{cityList}
						</select>
					</div>
				</div>
				<div id="baseData-foot" onTouchTap={ e => {this.nexts(e)} }>
					<img src={this.state.next.url} />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.querySelector('#baseData-content'));
