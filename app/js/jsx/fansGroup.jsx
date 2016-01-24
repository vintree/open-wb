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

import Nav from "../common/nav.jsx";
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

    componentDidMount() {
        document.getElementById('fansGroup-tab').onclick = (e) => {
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

        document.getElementById('fansGroup-head').onclick = (e) => {
            var node = ReactDOM.findDOMNode(e.target);
            if(node.id === 'userMsg-fallback' || node.parentNode.id === 'userMsg-fallback') {


                document.querySelector('#nav').classList.add('active');
                document.querySelector('.base-body').classList.add('active');

                if(node.classList.contains('active')) {
                    
                } else {
                    // node.classList.add('active');
                    // console.log(document.querySelector('.base-nav'));
                    // document.querySelector('#nav').classList.add('active');
                    // document.querySelector('.base-body').classList.add('active');
                }
            }
        }

    }

    render() {
        return (
            <div>
                <div className="base-nav">
                    <Nav></Nav>
                </div>
                <div className="base-body">
                    <section id='fansGroup-head'>
                        <UserMsg name="Nate"></UserMsg>
                    </section>
                    <section id="fansGroup-tab">
                        <Tab data={this.state.tab}></Tab>
                    </section>
                    <section id="fansGroup-newest" className={'fansGroup-md ' + this.state.tab[0].active}>
                        <Newest></Newest>
                    </section>
                    <section id="fansGroup-hot" className={'fansGroup-md ' + this.state.tab[1].active}>
                        <Newest></Newest>
                    </section>
                    <section id="fansGroup-details" className={'fansGroup-md ' + this.state.tab[2].active}>
                        <Details></Details>
                    </section>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<FansGroup name="Nate" />, document.getElementById('fansGroup-content'));
