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

import Url from '../temp/url.js';

export default class nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: [
                {
                    name: '热门推荐',
                    active: 'active',
                    img: 'heart',
                },
                {
                    name: '热门群组',
                    active: '',
                    img: 'hot',
                },
                {
                    name: '话题',
                    active: '',
                    img: 'talk',
                },
                {
                    name: '活动',
                    active: '',
                    img: 'activity',
                },
                {
                    name: '我的主页',
                    active: '',
                    img: 'me',
                },
                {
                    name: '关于我们',
                    active: '',
                    img: 'about',
                }
            ]
        }

        // console.log(this);

    }

    componentWillMount() {
        var flag = true;// 是否带有相关参数
        const navList = this.state.nav;
        const tag = Url.getParams('nav');



        for(let o of navList) {
            if(o.img === tag) {
                flag = false;
                o.active = 'active';
                o.img += '_active';
            } else {
                o.active = '';
            }
            console.log(o);
        }
        if(flag) {
            navList[0].active = 'active';
            navList[0].img += '_active';
        }


        console.log(this);
    }

    componentDidMount() {
        document.getElementById('nav-hide').onclick = function(e) {
            document.querySelector('#nav').classList.remove('active');
            document.querySelector('.base-body').classList.remove('active');
        }
    }

    render() {



        const navList = this.state.nav.map(function(v) {
            return (
                <a className={'nav-unit ' + v.active} key={ v.img } href={ '?nav=' + v.img }>
                    <div className="nav-img">
                        <img src={'../img/icon_nav/'+ v.img +'.png'}></img>
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
                <div id="nav-hide"></div>
            </div>
        )
    }
}


// <a className="nav-unit active">
//                         <div className="nav-img">
//                             <img src="../img/icon_nav/heart.png"></img>
//                         </div>
//                         <div className="nav-name">热门推荐</div>
//                     </a>
//                     <a className="nav-unit">
//                         <div className="nav-img">
//                             <img src="../img/icon_nav/hot.png"></img>
//                         </div>
//                         <div className="nav-name">热门群组</div>
//                     </a>
//                     <a className="nav-unit">
//                         <div className="nav-img">
//                             <img src="../img/icon_nav/talk.png"></img>
//                         </div>
//                         <div className="nav-name">话题</div>
//                     </a>
//                     <a className="nav-unit">
//                         <div className="nav-img">
//                             <img src="../img/icon_nav/activity.png"></img>
//                         </div>
//                         <div className="nav-name">活动</div>
//                     </a>
//                     <a className="nav-unit">
//                         <div className="nav-img">
//                             <img src="../img/icon_nav/me.png"></img>
//                         </div>
//                         <div className="nav-name">我的主页</div>
//                     </a>
//                     <a className="nav-unit">
//                         <div className="nav-img">
//                             <img src="../img/icon_nav/about.png"></img>
//                         </div>
//                         <div className="nav-name">关于我们</div>
//                     </a>

