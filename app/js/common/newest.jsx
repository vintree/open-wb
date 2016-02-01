require('../../sass/newest.scss');
import React from 'react';
import Superagent from 'superagent';

import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';
//import $ from 'jquery';

class Newest_head extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="newest-head">
                <div className="newest-imgUser">
                    <img src={this.props.data.avatar}></img>
                </div>
                <div className="newest-msg">
                    <div className="newest-msg-pp">
                        <div className="newest-name">{this.props.data.nickName}</div>
                        <span className="newest-tag">电影导演</span>
                        <span className="newest-tag">监制</span>
                        <span className="newest-tag">编剧</span>
                    </div>
                    <div className="newest-msg-dt">今天 12:30</div>
                </div>
                <div className="newest-source">
                    <div className="newest-source-1">
                        <div className="newest-source-1-1">来自</div>
                        <div className="newest-source-1-2">春光乍泄剧组</div>
                    </div>
                    <div className="newest-source-2">
                        <img src={this.props.vars.path + 'img/photo.png'} />
                    </div>
                </div>
            </div>
        )
    }
}

class Newest_body_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: [
                props.vars.path + 'img/bk.png',
            ]
        };
    }
    render() {
        return (
            <div className="newest-body">
                <div className="newest-tx">
                    {this.props.data.content}
                </div>
                <div className="newest-model1">
                    <img src={this.props.data.picList[0]}></img>
                </div>
            </div>
        )
    }
}

class Newest_body_2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="newest-body">
                <div className="newest-tx">
                    {this.props.data.content}
                </div>
                <div className="newest-model2">
                    <div className="newest-img"><img src={this.props.data.picList[0]}></img></div>
                    <div className="newest-img"><img src={this.props.data.picList[1]}></img></div>
                    <div className="newest-img"><img src={this.props.data.picList[2]}></img></div>
                </div>
            </div>
        )
    }
}

class Newest_foot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: [
                props.vars.path + 'img/collect.png',
                props.vars.path + 'img/good.png',
                props.vars.path + 'img/review.png',
                props.vars.path + 'img/map@3x.png'
            ]
        };
    }
    render() {
        let address = '';
        if(this.props.data.address.length !== 0) {
            address = (
                <div className="newest-place">
                    <img src={this.state.imgUrl[3]}></img>
                    {this.props.data.address}
                </div>
            )
        }

        return (
            <div className="newest-foot">
                {address}
                <div className="newest-tfoot">
                    <div className="newest-tfoot-content">
                        <div className="newest-foot-1">
                            <img src={this.state.imgUrl[0]}></img>
                            20
                        </div>
                        <div className="newest-foot-1">
                            <img src={this.state.imgUrl[1]}></img>
                            18
                        </div>
                        <div className="newest-foot-1">
                            <img src={this.state.imgUrl[2]}></img>
                            120 +
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Newest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentWillMount() {
        var url = this.props.vars.apiPath + 'tag/newest.json';
        url = FormatAjax.get(url, {
            tid: 1,
            count: 10
        });
        Superagent.get(url).end((err, req) => {
            if(req.status === 200) {
                var data = JSON.parse(req.text);
                if(data.status.code === '0') {
                    let list = this.state.list;
                    data = data.data;
                    data = data.map((v, ix) => {
                        v.address = Unicode.toHex(v.address);
                        v.constellation = Unicode.toHex(v.constellation);
                        v.content = Unicode.toHex(v.content);
                        v.extension = Unicode.toHex(v.extension);
                        v.nickName = Unicode.toHex(v.nickName);
                        v.sign = Unicode.toHex(v.sign);
                        v.title = Unicode.toHex(v.title);
                        return v;
                    });
                    list = list.concat(list, data);
                    this.setState({list: list});
                }
            }
        });
    }

    render() {
        const list = this.state.list.map((v, ix) => {
            let newest = '';
            if(v.picList.length === 1) {
                newest = (<Newest_body_1 data={v} vars={this.props.vars}></Newest_body_1>)
            } else if(v.picList.length > 1) {
                newest = (<Newest_body_2 data={v} vars={this.props.vars}></Newest_body_2>)
            } 
            return (
                <div key={v.time} className="newest-unit gap">
                    <Newest_head data={v} vars={this.props.vars}></Newest_head>
                    {newest}
                    <Newest_foot data={v} vars={this.props.vars}></Newest_foot>
                </div>
            );
        });
        return (
            <div id="newest">
                <div id="newest-group">
                    {list}
                </div>
            </div>
        )
    }
}