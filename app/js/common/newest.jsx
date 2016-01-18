require('../../sass/newest.scss');
import React from 'react';
//import $ from 'jquery';

class Newest_1 extends React.Component{

}

class Newest_2 extends React.Component{

}

class Newest_3 extends React.Component{

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
                        <div className="newest-head">
                            <div className="newest-imgUser">
                                <img src="../img/headImg@1x.png" />
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
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
