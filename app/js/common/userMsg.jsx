require('../../sass/userMsg.scss');
import React from 'react';
//import $ from 'jquery';

export default class UserMsg extends React.Component {
    dataJson(val) {
        var dataTopic, dataUser, dataQ;
        dataTopic = {
            '知': ['知乎', '知乎社区', '知乎指南'],
            '知乎': ['知乎', '知乎社区', '知乎指南']
        };
        dataUser = {
            '知': ['知道', '知晓', '知知'],
            '知乎': ['知乎者也', '知乎果壳', '知乎小楠']
        };
        dataQ = {
            '知': ['知乎大牛有那些', '春知晓', '搜狗投资知乎的意义'],
            '知乎': ['知乎有哪些高质量问答', '知乎如何赢利', '知乎在bat的战略地位']
        }
        return [dataTopic[val], dataUser[val], dataQ[val]];
    }

    handleInput(e) {
        var val = this.refs.search.value.trim();
        console.log(this.dataJson(val));
    }

    handleFocus(e) {
        $('#header-rsBox').addClass('active');
    }

    handleBlur(e) {
        $('#header-rsBox').removeClass('active');
    }

    handleMouseDown(e) {
        // alert('dada');
        e.preventDefault();
        // e.stopPropagation();

        $('#zh-top-search-input').focus();
        // alert('dasd');
    }

    render() {
        return (
            <div id="userMsg">
                <img id="userMsg-kbImg" className="blur" src="../img/bk.png" />
                <div id="userMsg-head-group">
                    <div id="userMsg-head">
                        <div id="userMsg-fallback" className="userMsg-ease">
                            <img id="userMsg-fallbackImg" src="../img/fallback@1x.png" />
                        </div>
                        <div id="userMsg-share" className="userMsg-ease">
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
