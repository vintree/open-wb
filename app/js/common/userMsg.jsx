require('../../sass/userMsg.scss');
import React from 'react';
//import $ from 'jquery';

export default class UserMsg extends React.Component {
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
                <img id="userMsg-kbImg" className="blur" src="../img/bk.png" />
                <div id="userMsg-head-group">
                    <div id="userMsg-head">
                        <div id="userMsg-left" className="userMsg-Menu userMsg-ease">
                            <img src="../img/menu@3x.png" />
                        </div>
                        <div id="userMsg-right" className="userMsg-ease">
                            <img src="../img/share@1x.png" />
                        </div>
                    </div>
                    <div id="userMsg-headImg">
                        <img src="../img/headImg@1x.png" />
                    </div>
                    <div id="userMsg-name">MakeBlok粉丝群</div>
                    <div id="userMsg-info">
                        <div id="userMsg-peaple" className="userMsg-info-group">123人</div>
                        <div id="userMsg-focus" className="userMsg-info-group">+ 加入</div>
                    </div>
                    <div id="userMsg-des">有趣味的开源机器人，游戏骨粉级玩总动员尽在粉丝群~</div>
                </div>
            </div>
        );
    }
}
