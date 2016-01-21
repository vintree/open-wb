require('../../sass/user.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";


import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';

import UserMsg from '../common/userMsg.jsx';
import Tab from "../common/tab.jsx";
import Follow from "../common/follow.jsx";
import Group from "../common/group.jsx";
import Activity from "../common/activity.jsx";
import Msg from "../common/msg.jsx";

import Newest from "../common/newest.jsx";

autoFont.init();

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            ]
        };
    }

    componentDidMount() {
        document.getElementById('user-tab').onclick = (e) =>  {
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
    }

    render() {
        return (
            <div>
                <section id='user-head'>
                    <UserMsg name="Nate"></UserMsg>
                </section>
                <section id="user-tab">
                    <Tab data={this.state.tab}></Tab>
                </section>
                <section id="user-dynamic" className={'user-md ' + this.state.tab[0].active}>
                    <Newest></Newest>
                </section>
                <section id="user-personage" className={'user-md ' + this.state.tab[1].active}>
                    <section className="gap">
                        <Follow></Follow>
                    </section>
                    <section className="gap">
                        <Group></Group>
                    </section>
                    <section className="gap">
                        <Activity></Activity>
                    </section>
                    <section className="gap">
                        <Msg></Msg>
                    </section>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<User name="Nate" />, document.getElementById('user-content'));
