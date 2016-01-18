require('../../sass/msg.scss');
import React from 'react';
import $ from 'jquery';

export default class Msg extends React.Component {
    constructor(props) {
        super();
        this.state = props;
    }
    render() {
        return (
            <div id="msg" className="gap">
                <div id="msg-group">
                    <div id="msg-label-group">
                        <div className="msg-label">个人资料</div>
                        <div className="msg-label">职业</div>
                        <div className="msg-label">兴趣</div>
                        <div className="msg-label">行业</div>
                        <div className="msg-label">所在地</div>
                    </div>
                    <div id="msg-tx-group">
                        <div className="msg-tx">给我一个支点，我能翘起整个地球！</div>
                        <div className="msg-tx">产品经理、36kr创始人、36kr老编辑</div>
                        <div className="msg-tx">创作、写作、画画</div>
                        <div className="msg-tx">社交</div>
                        <div className="msg-tx">北京海淀区</div>
                    </div>
                </div>
            </div>
        )
    }
}
