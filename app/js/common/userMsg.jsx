require('../../sass/userMsg.scss');
import React from 'react';

import Vars from '../temp/vars.js';
import Unicode from '../temp/unicode.js';

export default class UserMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staticPath: Vars.path('staticPath')
        };
    }
    handleFocus(e) {
        $('#header-rsBox').addClass('active');
    }

    handleBlur(e) {
        $('#header-rsBox').removeClass('active');
    }

    handleMouseDown(e) {
        e.preventDefault();
        $('#zh-top-search-input').focus();
    }
    
    render() {
        return (
            <div id="userMsg">
                <img id="userMsg-kbImg" className="blur" src={this.state.staticPath + 'img/bk.png'} />
                <div id="userMsg-head-group">
                    <div id="userMsg-head">
                        <div id="userMsg-left" className="userMsg-Menu userMsg-ease">
                            <img src={this.state.staticPath + 'img/menu@3x.png'} />
                        </div>
                        <div id="userMsg-right" className="userMsg-ease">
                            <img src={this.state.staticPath + 'img/share@1x.png'} />
                        </div>
                    </div>
                    <div id="userMsg-headImg">
                        <img src={this.state.staticPath + 'img/headImg@1x.png'} />
                    </div>
                    <div id="userMsg-name">{Unicode.toHex(Vars.storageValue('userStorage', 'nickname'))}</div>
                    <div id="userMsg-info">
                        <div id="userMsg-peaple" className="userMsg-info-group">{Unicode.toHex(Vars.storageValue('userStorage', 'followerSum')) || 0} 人</div>
                        <div id="userMsg-focus" className="userMsg-info-group">+ 加入</div>
                    </div>
                    <div id="userMsg-des">{Unicode.toHex(Vars.storageValue('userStorage', 'sign')) || '还没有填写哦！'}</div>
                </div>
            </div>
        );
    }
}
