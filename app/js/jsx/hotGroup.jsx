require('../../sass/hotGroup.scss');
// let Immutable = require('immutable');
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
// import $ from "jquery";


import InjectTapEventPlugin from "react-tap-event-plugin";
import Superagent from 'superagent';

import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';
import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';
import Vars from '../temp/vars.js';

import Loading from "../common/loading.jsx";
import GroupTab from "../common/groupTab.jsx";
import GroupList from "../common/groupList.jsx";


InjectTapEventPlugin();
autoFont.init();

Head.init({
    tit: '我司-热门群组',
    shareName: '我司-热门群组',
    shareUrl: '',
    shareImg: '',
    shareDesc: '',
    keywords: '',
    desc: '',
    admins: '',
    favicon: ''
});

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            hotTagList: Immutable.List(),
            list: Immutable.List(),
            trid: '',
            listInfo: {
                size: 10,
                page: 0
            }
        };
    }

    componentDidMount() {
        this.initTab();
        this.scrollLoading();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        // console.log(nextState);
        return true;
    }

    initTab() {
        let url = FormatAjax.get(Vars.api('hotTagList'), {
            cid: Vars.sys('cid'),
            offset: 0,
            count: 10
        });
        Superagent.get(url).end( (err, req) => {
            if(req.status === 200) {
                let data = JSON.parse(Unicode.toHex(req.text));
                if(data.status.code === '0') {
                    data = data.data;
                    data.map( (v, i) => {
                        if(i === 0) {
                            v.active = 'active';
                            this.initList(v.trid, data);
                        } else {
                            v.active = '';
                        }
                    });
                } else {
                    alert(data.status.msg);
                }
            }
        });
    }

    initList(trid, hotTagList) {
        let url = FormatAjax.get(Vars.api('hotList'), {
            cid: Vars.sys('cid'),
            mid: Vars.sys('mid'),
            ofid: Vars.sys('ofusername'),
            offset: this.state.listInfo.page,
            count: this.state.listInfo.size,
            bqid: trid,
        });
        Superagent.get(url).end( (err, req) => {
            if(req.status === 200) {
                let data = JSON.parse(req.text);
                if(data.status.code === '0') {
                    data = data.data;
                    this.setState({
                        list: Immutable.List(data),
                        hotTagList: !!hotTagList ? Immutable.List(hotTagList) : this.state.hotTagList,
                        trid: trid
                    });
                } else {
                    alert(data.status.msg);
                }
            }
        });
    }

// 事件
    eventToggleTab(e) {
        const
        node = e.target,
        ix = node.getAttribute('data-ix'),
        trid = node.getAttribute('data-tag');
        let 
        hotTagList = this.state.hotTagList;
        if(!!trid) {
            this.initList(trid);
            hotTagList = hotTagList.map( (v, i) => {
                if(i === Number(ix)) {
                    v.active = 'active';
                } else {
                    v.active = '';
                }
                return v;
            });
            this.setState({
                hotTagList: hotTagList
            });
        }
    }

    scrollLoading() {
        window.addEventListener('scroll', function(e) {
            let VTop = document.body.scrollTop,
                Vheight = window.outerHeight,
                CHeight = document.querySelector('#hotGroup-list').offsetHeight,
                COHeight = document.querySelector('#groupTab').offsetHeight,
                loadingTop = document.querySelector('#hotGroup-loading').offsetTop;
            console.log(VTop+Vheight-CHeight);
            // console.log(Vheight);
            // console.log(VTop);
            // console.log(CHeight);
            // console.log(loadingTop);
            // console.log('----------------------');
            if(VTop+Vheight-CHeight > -500) {
                
            }
        });
    }

    render() {
        return (
            <div>
                <section onTouchTap={ e => { this.eventToggleTab(e)} }>
                    <GroupTab hotTagList={this.state.hotTagList}></GroupTab>
                </section>
                <section id='hotGroup-list'>
                    <GroupList data={this.state.list} trid={this.state.trid}></GroupList>
                    <div id='hotGroup-loading'>eq</div>
                </section>
                <section>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<Main name="Nate" />, document.getElementById('hotGroup-content'));
