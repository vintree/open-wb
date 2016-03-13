require('../../sass/newest.scss');
import React from 'react';
import Superagent from 'superagent';

import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';

class Newest_head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vars: props.vars
        };
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
                        <span className="newest-tag">{Unicode.toHex(this.props.data.sign)}</span>
                    </div>
                    <div className="newest-msg-dt">{this.props.data.time}</div>
                </div>
                <div className="newest-source">
                    <div className="newest-source-1">
                        <div className="newest-source-1-1">来自</div>
                        <div className="newest-source-1-2">{Unicode.toHex(this.props.data.groupCollection.gname)}</div>
                    </div>
                    <div className="newest-source-2">
                        <img src={this.props.data.groupCollection.icon} />
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
        let imgList = this.props.data.picList;
        if(imgList.length !== 0) {
            imgList = (
                <div className="newest-model1">
                    <img src={this.props.data.picList[0]}></img>
                </div>
            );
        }

        return (
            <div className="newest-body">
                <div className="newest-tx">
                    {Unicode.toHex(this.props.data.content)}
                </div>
                {imgList}
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
                    {Unicode.toHex(this.props.data.content)}
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
        // console.log(props);
        this.state = {
            favorite: {
                imgUrl: props.vars.path + 'img/collect.png',
                imgActiveUrl: props.vars.path + 'img/collect-ed.png',
                num: this.props.data.favoriteNum + ' +'
            },
            praise: {
                imgUrl: props.vars.path + 'img/good.png',
                imgActiveUrl: props.vars.path + 'img/good-ed.png',
                num: this.props.data.praiseCount + ' +'
            },
            review: {
                imgUrl: props.vars.path + 'img/review.png', 
                imgActiveUrl: props.vars.path + 'img/review-ed.png',
                num: this.props.data.reviewCount + ' +'
            },
            imgAddrUrl: props.vars.path + 'img/map@3x.png'
        };
    }

    componentWillMount() {
        let 
        favorite = this.state.favorite, 
        praise = this.state.praise, 
        review = this.state.review;
        // console.log(this.state);
        if(this.props.data.isFavorite) {
            favorite.imgUrl = favorite.imgActiveUrl;
            favorite.num = this.props.data.favoriteNum;
        }
        if(this.props.data.isFaved) {
            praise.imgUrl = praise.imgActiveUrl;
            praise.num = this.props.data.praiseCount;
        }
    }

    render() {
        let address = '';
        if(this.props.data.location) {
            address = (
                <div className="newest-place">
                    <img src={this.state.imgAddrUrl}></img>
                    {Unicode.toHex(this.props.data.location)}
                </div>
            )
        }
        return (
            <div className="newest-foot">
                {address}
                <div className="newest-tfoot">
                    <div className="newest-tfoot-content">
                        <div className="newest-foot-1">
                            <img src={this.state.favorite.imgUrl}></img>
                            {this.state.favorite.num}
                        </div>
                        <div className="newest-foot-1">
                            <img src={this.state.review.imgUrl}></img>
                            {this.state.review.num}
                        </div>
                        <div className="newest-foot-1">
                            <img src={this.state.praise.imgUrl}></img>
                            {this.state.praise.num}
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
        
    }

    render() {
        const list = this.props.data.map((v, ix) => {
            let newest = '';
            if(v.picList.length <= 1) {
                newest = (<Newest_body_1 data={v} vars={this.props.vars}></Newest_body_1>)
            } else if(v.picList.length > 1) {
                newest = (<Newest_body_2 data={v} vars={this.props.vars}></Newest_body_2>)
            }
            return (
                <div key={v.id} className="newest-unit gap">
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
