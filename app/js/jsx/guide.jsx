require('../../sass/guide.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

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
			]
		}
	}

	isActive(e) {
		const node = e.target;
		const ix = node.getAttribute('data-ix');
		const list = this.state.list;
		if(e.target.tagName.toLowerCase() === 'img') {
			if(list[ix].active === 'active') {
				list[ix].active = '';
				list[ix].url = list[ix].url.substr(0, list[ix].url.indexOf('active'));
				console.log(list[ix]);
			} else {
				list[ix].active = 'active';
				list[ix].url = list[ix].url + 'active';
			}
			this.setState({list: list});
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
					<img src="../img/next@3x.png" />
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