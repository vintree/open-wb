//require('../../sass/base.scss');
require('../../sass/fansGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


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


import Newest from "../common/newest.jsx";
import Hot from "../common/hot.jsx";
import Details from "../common/details.jsx";

autoFont.init();

class FansGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: [
                {
                    name: '最新',
                    codeName: 'fansGroup-newest',
                    active: 'active'
                },
                {
                    name: '热门',
                    codeName: 'fansGroup-hot',
                    active: ''
                },
                {
                    name: '详情',
                    codeName: 'fansGroup-details',
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
                <section id='fansGroup-head'>
                    <UserMsg name="Nate"></UserMsg>
                </section>
                <section id="fansGroup-tab" onClick={e => {this.toggleTab(e)}}>
                    <Tab data={this.state.tab}></Tab>
                </section>
                <section id="fansGroup-newest" className="fansGroup-md active">
                    <Newest></Newest>
                </section>
                <section id="fansGroup-hot" className="fansGroup-md">
                    <Newest></Newest>
                </section>
                <section id="fansGroup-details" className="fansGroup-md">
                    <Details></Details>
                </section>
            </div>
        )
    }
}

ReactDOM.render(<FansGroup name="Nate" />, document.getElementById('fansGroup-content'));
