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
import Vars from '../temp/vars.js';

import GroupTab from "../common/groupTab.jsx";
import GroupList from "../common/groupList.jsx";

InjectTapEventPlugin();
autoFont.init();

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            // vars: {
            //     vars: (new _config).vars(),
            //     apiUrl: {
            //         tag_category: 'zuji/tag_category.json'
            //     }
            // },
            hotTagList: [],
            list: []
        }

    }

    componentWillMount() {
        this.initTab();
    }

    initTab() {
        let url = FormatAjax.get(Vars.api('hotTagList'), {
            cid: Vars.sys('cid'),
            offset: 0,
            count: 20
        });
        Superagent.get(url).end( (err, req) => {
            if(req.status === 200) {
                let data = JSON.parse(Unicode.toHex(req.text));
                if(data.status.code === '0') {
                    data = data.data;
                    data.map( (v, i) => {
                        if(i === 0) {
                            v.active = 'active';
                            this.initList(v.trid);
                        } else {
                            v.active = '';
                        }
                    })
                    this.setState({
                        hotTagList: data
                    });
                } else {
                    alert(data.status.msg);
                }
            }
        });
    }

    initList(trid) {
        let url = FormatAjax.get(Vars.api('hotList'), {
            cid: Vars.sys('cid'),
            mid: Vars.sys('mid'),
            ofid: Vars.sys('ofusername'),
            offset: 0,
            count: 20,
            bqid: trid,
        });
        Superagent.get(url).end( (err, req) => {
            if(req.status === 200) {
                // console.log(req.text);
                // console.log(JSON.parse(req.text));
                let data = JSON.parse(req.text);
                if(data.status.code === '0') {
                    data = data.data;
                    this.setState({
                        list: data
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
        ix = e.target.getAttribute('data-ix'),
        hotTagList = this.state.hotTagList,
        trid = e.target.getAttribute('data-tag');
        this.initList(trid);
        for(let i = 0, l = hotTagList.length; i < l; i++) {
            if(i === Number(ix)) {
                hotTagList[i].active = 'active';
            } else {
                hotTagList[i].active = '';
            }
        }
        this.setState({hotTagList: hotTagList});
    }


    render() {
        return (
            <div>
                <section onTouchTap={ e => { this.eventToggleTab(e)} }>
                    <GroupTab hotTagList={this.state.hotTagList}></GroupTab>
                </section>
                <section>
                    <GroupList data={this.state.list}></GroupList>
                    <div></div>
                </section>

            </div>
        )
    }
}

ReactDOM.render(<Main name="Nate" />, document.getElementById('hotGroup-content'));
