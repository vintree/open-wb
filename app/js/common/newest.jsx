require('../../sass/newest.scss');
import React from 'react';
//import $ from 'jquery';

class Newest_head extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="newest-head">
                <div className="newest-imgUser">
                    <img src="../img/headImg@1x.png" ></img>
                </div>
                <div className="newest-msg">
                    <div className="newest-msg-pp">
                        <div className="newest-name">王家卫</div>
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
    constructor() {
        super();
    }
    render() {
        return (
            <div className="newest-body">
                <div className="newest-tx">
                    虽然没有明确具体坐标，但现场很好找，因为很远就能看到马路边上一团火。“车身已经是一片火海，看不清车型和车牌了。”水枪从着火汽车正前方左右两侧进......
                </div>
                <div className="newest-model1">
                    <img src="../img/bk.png"></img>
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

export default class Newest extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="newest">
                <div id="newest-group">
                    <div className="newest-unit">
                        <Newest_head></Newest_head>
                        <Newest_body_1></Newest_body_1>
                    </div>
                    <div className="newest-unit">
                        <Newest_head></Newest_head>
                        <Newest_body_2></Newest_body_2>
                    </div>
                </div>
            </div>
        )
    }
}
