require('../../sass/msg.scss');
import React from 'react';
import Vars from '../temp/vars.js';
// import $ from 'jquery';

export default class Msg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: Vars.storageValue('user')
        };
        // console.log(this.state);
    }
    render() {
        return (
            <div id="msg" className="gap">
                <div id="msg-group">
                    <div id="msg-label-group">
                        <div className="msg-label">昵称</div>
                        <div className="msg-label">性别</div>
                        <div className="msg-label">年龄</div>
                        <div className="msg-label">地区</div>
                        <div className="msg-label">职业</div>
                        <div className="msg-label">个性签名</div>
                        <div className="msg-label">兴趣好爱</div>
                    </div>
                    <div id="msg-tx-group">
                        <div className="msg-tx">{this.state.msg.nickname}</div>
                        <div className="msg-tx">{this.state.msg.gender}</div>
                        <div className="msg-tx">{this.state.msg.age}</div>
                        <div className="msg-tx">{this.state.msg.address}</div>
                        <div className="msg-tx">{this.state.msg.address}</div>
                        <div className="msg-tx">{this.state.msg.address}</div>
                        <div className="msg-tx">{this.state.msg.address}</div>
                    </div>
                </div>
            </div>
        )
    }
}
