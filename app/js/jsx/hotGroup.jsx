require('../../sass/hotGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import InjectTapEventPlugin from "react-tap-event-plugin";


import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';


import GroupTab from "../common/groupTab.jsx";
import GroupList from "../common/groupList.jsx";

InjectTapEventPlugin();
autoFont.init();

class HotGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: [
                {
                    name: '最新',
                    tag: 'new',
                    active: 'active'
                },
                {
                    name: '最火',
                    tag: 'hot',
                    active: ''
                },
                {
                    name: '投资',
                    tag: 'new',
                    active: ''
                },
                {
                    name: '媒体人',
                    tag: 'new',
                    active: ''
                },
                {
                    name: '职业',
                    tag: 'hot',
                    active: ''
                },
                {
                    name: '空间',
                    tag: 'new',
                    active: ''
                },
                {
                    name: '运动',
                    tag: 'new',
                    active: ''
                },
                {
                    name: '美容',
                    tag: 'hot',
                    active: ''
                }
            ]
        }        
    }

    toggleTab(e) {
        const ix = +e.target.getAttribute('data-ix');
        const tab = this.state.tab;
        for(let i = 0, l = tab.length; i < l; i++) {
            if(i === ix) {
                tab[i].active = 'active';
            } else {
                tab[i].active = '';
            }
        }
        this.setState({tab: tab});
    }

    render() {
        return (
            <div>
                <section onTouchTap={ e => { this.toggleTab(e)} }>
                    <GroupTab tab={this.state.tab}></GroupTab>
                </section>
                <section>
                    <GroupList></GroupList>
                </section>
                
            </div>
        )
    }
}

ReactDOM.render(<HotGroup name="Nate" />, document.getElementById('hotGroup-content'));
