require('../../sass/guide.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

InjectTapEventPlugin();


class Main extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id="guide-main">
				<div id="guide-head">不上班的时候您关注什么<span id="guide-head-tag">?</span></div>
				<div id="guide-body">
					<div className="guide-unit guide-unit-1"><img src="../img/guide/大牛语录@3x.png" /></div>
					<div className="guide-unit guide-unit-2"><img src="../img/guide/公司八卦@3x.png" /></div>
					<div className="guide-unit guide-unit-3"><img src="../img/guide/职业技能@3x.png" /></div>
					<div className="guide-unit guide-unit-4"><img src="../img/guide/行业干活@3x.png" /></div>
					<div className="guide-unit guide-unit-5"><img src="../img/guide/创业@3x.png" /></div>
					<div className="guide-unit guide-unit-6"><img src="../img/guide/兴趣爱好@3x.png" /></div>
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

ReactDOM.render(<BaseData />, document.getElementById('guide-content'));