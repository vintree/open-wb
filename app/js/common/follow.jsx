require('../../sass/follow.scss');
import React from 'react';
import Superagent from 'superagent';

import Vars from '../temp/vars.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';

export default class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            num: 0
        };
    }

    componentDidMount() {
        let 
        url = FormatAjax.get(Vars.api('follow_list'), {
            ofid: Vars.storageValue('user', 'ofusername'),
            offset: 0,
            count: 6
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
        let List = this.state.list.map( (v,i) => {
            return (
                <img className='follow-2-img' src={v.avatar} key={v.mid}></img>
            );
        });
        return (
            <div id="follow">
                <div id="follow-group">
                    <div id="follow-1">
                        <div id="follow-1-name">他的关注</div>
                        <div id="follow-1-num">{this.state.num}</div>
                    </div>
                    <div id="follow-2">
                        {List}
                    </div>
                    <div id="follow-3">
                        <div id="follow-3-img">
                            <img src={Vars.path('staticPath') + "img/right@1.png"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
