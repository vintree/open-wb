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
    constructor() {
        super();
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

    toggleTab(e) {
        const node = e.target;
        const role = node.attributes.role.value;
        $(node).addClass('active')
            .siblings()
            .removeClass('active');
        $('#' + role).addClass('active')
            .siblings()
            .removeClass('active');
    }

    render() {
        return (
            <div>
                <section id='user-head'>
                    <UserMsg name="Nate"></UserMsg>
                </section>
                <section id="user-tab" onClick={e => {this.toggleTab(e)}}>
                    <Tab data={this.state.tab}></Tab>
                </section>
                <section id="user-dynamic" className="user-md active">
                    <Newest></Newest>
                </section>
                <section id="user-personage" className="user-md">
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
