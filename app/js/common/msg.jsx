require('../../sass/msg.scss');
import React from 'react';

import Vars from '../temp/vars.js';
import Unicode from '../temp/unicode.js';

export default class Msg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: Vars.storageValue('user')
        };
        console.log(this.state.msg);
    }

    componentWillMount() {
        let msg = Vars.storageValue('user');
        if(msg) {
            msg.gender = this.initSex(msg.gender);
            msg.extension = JSON.parse(msg.extension);
        }
        this.state = {
            msg: msg
        };
    }

    /*
        转换成可看的性别代号
     */
    initSex(sex) {
        // if(sex === 'm') {
        //     return '男'
        // } else if(sex === 'f') {
        //     return '女'
        // } else {
        //     return '未知'
        // }
        switch(sex) {
            case 'm': 
                return '男';
                break;
            case 'f':
                return '女';
                break;
            default:
                return '未知';
        }

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
                        <div className="msg-tx">{Unicode.toHex(this.state.msg.nickname)}</div>
                        <div className="msg-tx">{this.state.msg.gender}</div>
                        <div className="msg-tx">{this.state.msg.age}</div>
                        <div className="msg-tx">{Unicode.toHex(this.state.msg.address)}</div>
                        <div className="msg-tx">{Unicode.toHex(this.state.msg.extension.position)}</div>
                        <div className="msg-tx">{Unicode.toHex(this.state.msg.sign)}</div>
                        <div className="msg-tx">{Unicode.toHex(this.state.msg.extension.interest)}</div>
                    </div>
                </div>
            </div>
        )
    }
}
