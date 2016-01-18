//require('../../sass/base.scss');
require('../../sass/fansGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';


import UserMsg from '../common/userMsg.jsx';
import Tab from "../common/tab.jsx";
import Member from "../common/member.jsx";
import Tag from "../common/tag.jsx";
import Related from "../common/related.jsx";
import Activity from "../common/activity.jsx";
import Photo from "../common/photo.jsx";

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
                    
                </section>
            </div>
        )
    }
}

ReactDOM.render(<User name="Nate" />, document.getElementById('user-content'));
