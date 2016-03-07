require('../../sass/activity.scss');
import React from 'react';
import Superagent from 'superagent';

import Vars from '../temp/vars.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';

export default class Tag extends React.Component {
    constructor(props) {
        super();
        this.state = {
            list: [],
            num: 0,
            staticPath: Vars.path('staticPath')
        }
    }

    componentDidMount() {
        let 
        url = FormatAjax.get(Vars.api('event_list'), {
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
                <div className="activity-2-label" key={v.eid}>
                    <span>{Unicode.toHex(v.title)}</span>
                </div>
            );
        });

        return (
            <div id="activity">
                <div id="activity-group">
                    <div id="activity-1">
                        <div id="activity-1-name">近期活动</div>
                        <div id="activity-1-num">{this.state.num}</div>
                    </div>
                    <div id="activity-2">
                        <div>
                            {List}
                        </div>
                        <div className="activity-more">
                            <img src={this.state.staticPath + "img/right@1.png"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
