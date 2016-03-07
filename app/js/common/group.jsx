require('../../sass/group.scss');
import React from 'react';
import Superagent from 'superagent';

import Vars from '../temp/vars.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';


export default class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            num: 0
        };
    }

    componentDidMount() {
        let 
        url = FormatAjax.get(Vars.api('tag_list'), {
            mid: Vars.storageValue('user', 'mid'),
            offset: 0,
            count: 4
        });
        Superagent.get(url).end((err, res) => {
            if(res.status === 200) {
                let data = JSON.parse(res.text);
                if(data.status.code === '0') {
                    let 
                    list = this.state.list,
                    num = data.sum;

                    data = data.data;
                    list.push.apply(list, data);
                    this.setState({
                        list: list,
                        num: num
                    });
                } else {
                    alert(data.status.msg);
                }

            }
        });
    }

    render() {
        let List = this.state.list.map((v,i) => {
            return (
                <div className="group-2-unit" key={v.tid} >
                    <img className='group-2-img' src={v.icon} />
                    <div className='group-2-name'>{Unicode.toHex(v.name)}</div>
                </div>
            );
        });

        return (
            <div id="group">
                <div id="group-group">
                    <div id="group-1">
                        <div id="group-1-name">他的群组</div>
                        <div id="group-1-num">{this.state.num}</div>
                    </div>
                    <div id="group-2">
                        {List}
                    </div>
                    <div id="group-3">
                        <div id="group-3-img">
                            <img src={Vars.path('staticPath') + "img/right@1.png"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
