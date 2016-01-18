//require('../../sass/base.scss');
require('../../sass/fansGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';


import UserMsg from '../common/userMsg.jsx';
import Tab from "../common/tab.jsx";
import Member from "../common/member.jsx";
import Tag from "../common/tag.jsx";
import Related from "../common/related.jsx";
import Activity from "../common/activity.jsx";
import Photo from "../common/photo.jsx";
//var headData = {
//    tit: '首页-知乎',
//    shareName: '首页-知乎',
//    shareUrl: 'http://www.baidu.com',
//    shareImg: 'http://www.baidu.com/upload/clientapp/vstar/img/default_share_logo.jpg',
//    shareDesc: '分享描述',
//    keywords: 'seo 关键字',
//    desc: 'seo 描述',
//    admins: '25250114746637056375',
//    favicon: '../img/favicon.ico',
//}
//Head.init(headData);


autoFont.init();

class FansGroup extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <section id='fansGroup-head'>
                    <UserMsg name="Nate" />
                </section>
                <section id="fansGroup-tab" className="">
                    <Tab></Tab>
                </section>


            </div>
        )
    }
}

ReactDOM.render(<FansGroup name="Nate" />, document.getElementById('fansGroup-content'));
