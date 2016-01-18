//require('../../sass/base.scss');
require('../../sass/user.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';

import UserMsg from '../common/userMsg.jsx';
import Tab from "../common/tab.jsx";
import Follow from "../common/follow.jsx";
import Group from "../common/group.jsx";
import Activity from "../common/activity.jsx";
import Msg from "../common/msg.jsx";
autoFont.init();

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: [
                {
                    name: '动态',
                    codeName: 'user-dynamic',
                    active: ''
                },
                {
                    name: '个人',
                    codeName: 'user-personage',
                    active: 'active'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <section id='user-head'>
                    <UserMsg name="Nate"></UserMsg>
                </section>
                <section id="user-tab" className="">
                    <Tab data={this.state.tab}></Tab>
                </section>
                <section id="user-dynamic" className="">

                </section>
                <section id="user-personage">
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
