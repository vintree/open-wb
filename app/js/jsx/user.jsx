require('../../sass/user.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Superagent from 'superagent';
import InjectTapEventPlugin from "react-tap-event-plugin";

import CORE from '../temp/core/app.js';

import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';
import Storage from "../temp/storage.js";
import FormatAjax from '../temp/formatAjax.js';
import Vars from '../temp/vars.js';

import Nav from "../common/nav.jsx";
import UserMsg from '../common/userMsg.jsx';
import Tab from "../common/tab.jsx";
import Follow from "../common/follow.jsx";
import Group from "../common/group.jsx";
import Activity from "../common/activity.jsx";
import Msg from "../common/msg.jsx";
import Newest from "../common/newest.jsx";



autoFont.init();
InjectTapEventPlugin();
Head.init({
    tit: '我司-用户个人页',
    shareName: '我司-用户个人页',
    shareUrl: '',
    shareImg: '',
    shareDesc: '',
    keywords: '',
    desc: '',
    admins: '',
    favicon: ''
});

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vars: (new _config()).vars(),
            tab: [
                {
                    name: '动态',
                    codeName: 'user-dynamic',
                    active: 'active'
                },
                {
                    name: '个人',
                    codeName: 'user-personage',
                    active: ''
                }
            ],
            noteList: []
        };
    }

    componentWillMount() {
        let userData = Storage.get('ws');
        this.state.userData = userData;

        this.getUserMsg(userData);
    }

    tapMemu(e) {
        const node = ReactDOM.findDOMNode(e.target);
        if(node.className.indexOf('userMsg-Menu') !== -1 || node.parentNode.className.indexOf('userMsg-Menu') !== -1) {
            document.querySelector('#nav').classList.add('active');
            document.querySelector('.base-body').classList.add('active');
        }
    }

    tapTab(e) {
        const node = ReactDOM.findDOMNode(e.target);
        const tab = this.state.tab;
        const ix = Number(node.getAttribute('data-ix'));
        for(var i = 0, l = tab.length; i < l; i++) {
            if(i === ix) {
                tab[i].active = 'active';
            } else {
                tab[i].active = '';
            }
        }
        this.setState({tab: tab});
    }

    getUserMsg(userData) {
        const 
        mid = userData['mid'],
        requester = userData['ofusername'];
        console.log(mid, requester);
        CORE.ajax.user.show(mid, requester, (data) => {
            console.log('su');
            console.log(data);
        }, (data) => {
            console.log('er');
            console.log(data);
        });
    }

    componentDidMount() {
        let 
        url = FormatAjax.get(Vars.api('get_my_notes'), {
            mid: Vars.storageValue('user', 'mid'),
            offset: 0,
            count: 10
        });
        Superagent.get(url).end((err, res) => {
            if(res.status === 200) {
                let data = JSON.parse(res.text);
                if(data.status.code === '0') {
                    let 
                    list = this.state.noteList,
                    num = data.sum;
                    data = data.data;
                    for(let o in data) {
                        if(data.hasOwnProperty(o)) {
                            let tlist = data[o];
                            tlist = tlist.map((v, i) => {
                                // console.log(v);
                                v.time = o;
                                return v;
                            });
                            list.push.apply(list, tlist);
                        }
                    }
                    this.setState({
                        noteList: list
                    });
                } else {
                    alert(data.status.msg);
                }
            }
        });
    }

    render() {
        return (
            <div>
                <div className="base-nav">
                    <Nav vars={this.state.vars}></Nav>
                </div>
                <div className="base-body">
                    <section id='user-head' onTouchTap={ e => {this.tapMemu(e)} }>
                        <UserMsg vars={this.state.vars} data={this.state.userData}></UserMsg>
                    </section>
                    <section id="user-tab" onTouchTap={ e => {this.tapTab(e)} }>
                        <Tab vars={this.state.vars} data={this.state.tab}></Tab>
                    </section>
                    <section id="user-dynamic" className={'user-md ' + this.state.tab[0].active}>
                        <Newest vars={this.state.vars} data={this.state.noteList}></Newest>
                    </section>
                    <section id="user-personage" className={'user-md ' + this.state.tab[1].active}>
                        <section className="gap">
                            <Follow vars={this.state.vars}></Follow>
                        </section>
                        <section className="gap">
                            <Group vars={this.state.vars}></Group>
                        </section>
                        <section className="gap">
                            <Activity vars={this.state.vars}></Activity>
                        </section>
                        <section className="gap">
                            <Msg vars={this.state.vars}></Msg>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main name="Nate" />, document.getElementById('user-content'));
