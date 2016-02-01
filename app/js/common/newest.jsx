require('../../sass/newest.scss');
import React from 'react';
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
                        <img src="../img/photo.png" />
                    </div>
                </div>
            </div>
        )
    }
}

class Newest_tx extends React.Component {
    constructor() {
        super();
    }
}

class Newest_body_1 extends React.Component {
    constructor(props) {
        super(props);
        var cf = new _config;
        const path = cf.path();
        this.state = {
            imgUrl: [
                path + 'img/bk.png',
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
                    <img src={this.state.imgUrl[0]}></img>
                </div>
            </div>
        )
    }
}

class Newest_body_2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="newest-body">
                <div className="newest-tx">
                    虽然没有明确具体坐标，但现场很好找，因为很远就能看到马路边上一团火。“车身已经是一片火海，看不清车型和车牌了。”水枪从着火汽车正前方左右两侧进......
                </div>
                <div className="newest-model2">
                    <div className="newest-img"><img src="../img/bk.png"></img></div>
                    <div className="newest-img"><img src="../img/bk.png"></img></div>
                    <div className="newest-img"><img src="../img/bk.png"></img></div>
                </div>
            </div>
        )
    }
}

class Newest_foot extends React.Component {
    constructor(props) {
        super(props);
        var cf = new _config;
        const path = cf.path();
        this.state = {
            imgUrl: [
                path + 'img/collect.png',
                path + 'img/good.png',
                path + 'img/review.png',
                path + 'img/map@3x.png'
            ]
        };
    }
    render() {
        return (
            <div className="newest-foot">
                <div className="newest-place">
                    <img src={this.state.imgUrl[3]}></img>
                    {this.props.data.address}
                </div>
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
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    componentWillMount() {
        var cf = new _config;
        const apiPath = cf.apiPath();
        var url = apiPath + 'tag/newest.json';
        url = FormatAjax.get(url, {
            tid: 1,
            count: 10
        });
        fetch(url).then(data => {
            if(data.status === 200) {
                data.json().then(json => {
                    if(json.status.code === '0') {
                        let list = this.state.list;
                        json = json.data;
                        json = json.map((v, ix) => {
                            v.address = Unicode.toHex(v.address);
                            v.constellation = Unicode.toHex(v.constellation);
                            v.content = Unicode.toHex(v.content);
                            v.extension = Unicode.toHex(v.extension);
                            v.nickName = Unicode.toHex(v.nickName);
                            v.sign = Unicode.toHex(v.sign);
                            v.title = Unicode.toHex(v.title);
                            return v;
                        });
                        list = list.concat(list, json);
                        this.setState({list: list});
                    }
                });
            }
        });
    }



    render() {
        const list = this.state.list.map((v, ix) => {
            return (
                <div key={v.time} className="newest-unit gap">
                    <Newest_head data={v}></Newest_head>
                    <Newest_body_1 data={v}></Newest_body_1>
                    <Newest_foot data={v}></Newest_foot>
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

// <div className="newest-unit gap">
//                         <Newest_head></Newest_head>
//                         <Newest_body_1></Newest_body_1>
//                         <Newest_foot></Newest_foot>
//                     </div>


// <div className="newest-unit gap">
//                         <Newest_head></Newest_head>
//                         <Newest_body_2></Newest_body_2>
//                         <Newest_foot></Newest_foot>
//                     </div>

