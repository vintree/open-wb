require('../../sass/guide.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";


import autoFont from '../temp/autoFont.js';

autoFont.init();
InjectTapEventPlugin();

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					url: '../img/guide/大牛语录@3x',
					active: ''
				},
				{
					url: '../img/guide/公司八卦@3x',
					active: ''
				},
				{
					url: '../img/guide/职业技能@3x',
					active: ''
				},
				{
					url: '../img/guide/行业干活@3x',
					active: ''
				},
				{
					url: '../img/guide/创业@3x',
					active: ''
				},
				{
					url: '../img/guide/兴趣爱好@3x',
					active: ''
				},
			],
			next: {
				url: '../img/next@3x',
				active: ''
			}
		}
	}
	
	isNext(list) {
		const next = this.state.next;
		const nextTag = list.some(function(v, ix) {
			return v.active === 'active';
		});

		if(nextTag) {
			if(!next.url.includes('active')) {
				next.url = next.url + 'active';
			}
		} else {
			next.url = next.url.substr(0, next.url.indexOf('active'));
		}
		this.setState({
			next: next
		});
	}

	isActive(e) {
		const node = e.target;
		const ix = node.getAttribute('data-ix');
		const list = this.state.list;
		if(e.target.tagName.toLowerCase() === 'img') {
			if(list[ix].active === 'active') {
				list[ix].active = '';
				list[ix].url = list[ix].url.substr(0, list[ix].url.indexOf('active'));
			} else {
				list[ix].active = 'active';
				list[ix].url = list[ix].url + 'active';
			}
			this.setState({list: list});
			this.isNext(list);
		}
		
	}

	render() {
		const node = this.state.list.map(function(v, ix) {
			return (
				<div key={ix} className={'guide-unit guide-unit-' + (ix + 1)}><img className={v.active} src={v.url + '.png'} data-ix={ix} /></div>
			)
		})
		return (
			<div id="guide-main">
				<div id="guide-head">不上班的时候您关注什么<span id="guide-head-tag">?</span></div>
				<div id="guide-body" onTouchTap={ e => {this.isActive(e)}}>
					{node}
				</div>
				<div id="guide-foot">
					<img src={this.state.next.url + '.png'} />
				</div>
			</div>
		)
	}
}

class BaseData extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Main />
			</div>
		)
	}
}

ReactDOM.render(<BaseData />, document.querySelector('#guide-content'));