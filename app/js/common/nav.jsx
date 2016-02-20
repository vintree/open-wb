/*
    AT:
        ABEL

    EQ:
        在URL中nav参数作为标识

    DT:
        2016-1-20

*/

require('../../sass/nav.scss');
import React from 'react';
import InjectTapEventPlugin from "react-tap-event-plugin";

import Url from '../temp/url.js';
import Vars from '../temp/vars.js';

InjectTapEventPlugin();

export default class nav extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            vars: props.vars,
            nav: [
                {
                    name: '热门推荐',
                    active: 'active',
                    img: 'heart',
                    href: '?nav=heart'
                },
                {
                    name: '热门群组',
                    active: '',
                    img: 'hot',
                    href: Vars.href('hotGroup')
                },
                {
                    name: '话题',
                    active: '',
                    img: 'talk',
                    href: '?nav=talk'
                },
                {
                    name: '活动',
                    active: '',
                    img: 'activity',
                    href: '?nav=activity'
                },
                {
                    name: '我的主页',
                    active: '',
                    img: 'me',
                    href: Vars.href('user')
                },
                {
                    name: '关于我们',
                    active: '',
                    img: 'about',
                    href: '?nav=about'
                }
            ]
        }
    }

    componentWillMount() {
        var flag = true;// 是否带有相关参数
        const navList = this.state.nav;
        const tag = Url.getParams('nav');
        for(let i = 0, l = navList.length; i < l; i++) {
            if(navList[i].img === tag) {
                flag = false;
                navList[i].active = 'active';
                navList[i].img += '_active';
            } else {
                navList[i].active = '';
            }
        }
        if(flag) {
            navList[0].active = 'active';
            navList[0].img += '_active';
        }
    }

    tapHide(e) {
        document.querySelector('#nav').classList.remove('active');
        document.querySelector('.base-body').classList.remove('active');
    }

    render() {
        const navList = this.state.nav.map(v => {
            return (
                <a className={'nav-unit ' + v.active} key={ v.img } href={ v.href }>
                    <div className="nav-img">
                        <img src={this.state.vars.path + 'img/icon_nav/'+ v.img +'.png'}></img>
                    </div>
                    <div className="nav-name">{v.name}</div>
                </a>
            )
        });

        return (
            <div id="nav" className="nav">
                <div id="nav-group">
                    {navList}
                </div>
                <div id="nav-hide" onTouchTap={ e => {this.tapHide(e)} }></div>
            </div>
        )
    }
}
