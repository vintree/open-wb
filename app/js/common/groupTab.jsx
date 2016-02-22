require('../../sass/groupTab.scss');
import React from 'react';
import Superagent from 'superagent';
import InjectTapEventPlugin from "react-tap-event-plugin";


import FormatAjax from '../temp/formatAjax.js';
import Vars from '../temp/vars.js';
import Unicode from '../temp/unicode.js';

InjectTapEventPlugin();


export default class GroupTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotList: []
        }
    }

    componentDidMount() {
        let url = FormatAjax.get(Vars.api('hotList'), {
            cid: 17,
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
                        } else {
                            v.active = '';
                        }
                    })
                    this.setState({
                        hotList: data
                    })
                } else {
                    alert(data.status.msg);
                }
            }
        })
    }

    toggleTab(e) {
        const ix = e.target.getAttribute('data-ix');
        const hotList = this.state.hotList;
        for(let i = 0, l = hotList.length; i < l; i++) {
            if(i === Number(ix)) {
                hotList[i].active = 'active';
            } else {
                hotList[i].active = '';
            }
        }
        this.setState({hotList: hotList});
    }

    render() {
        let HotList = this.state.hotList || [];
        HotList = HotList.map((v, ix) => {
            return (
                <div key={v.trid} className={'groupTab-unit ' + v.active} data-tag={v.trid} data-ix={ix}>{v.name}</div>
            )
        });
        return (
            <div id="groupTab">

                <div id="groupTab-center">
                    <div id="groupTab-overflow" onTouchTap={ e => { this.toggleTab(e)} }>
                        {HotList}
                    </div>
                </div>
            </div>
        );
    }
}

// <div id="groupTab-left"></div>
// <div id="groupTab-right"></div>
