require('../../sass/hotGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import InjectTapEventPlugin from "react-tap-event-plugin";
import Superagent from 'superagent';

import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';
import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';

import GroupTab from "../common/groupTab.jsx";
import GroupList from "../common/groupList.jsx";

InjectTapEventPlugin();
autoFont.init();

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            vars: {
                vars: (new _config).vars(),
                apiUrl: {
                    tag_category: 'zuji/tag_category.json'
                }
            },
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
        this.iniTab();
    }


    iniTab() {
        // let url = this.state.vars.vars.apiPath + this.state.vars.apiUrl.tag_category;
        // console.log(url);
        // Superagent.get(url).end((arr, req) => {
        //     if(req.status === 200) {
        //         let data = JSON.parse(Unicode.toHex(req.text));
        //         if(data.status.code === '0') {
        //             data = data.data;
        //             console.log(data);
        //         } else {
        //
        //         }
        //     }
        // })
    }



    render() {
        return (
            <div>
                <section>
                    <GroupTab tab={this.state.tab}></GroupTab>
                </section>
                <section>
                    <GroupList></GroupList>
                </section>

            </div>
        )
    }
}

ReactDOM.render(<Main name="Nate" />, document.getElementById('hotGroup-content'));
