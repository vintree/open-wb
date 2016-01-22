require('../../sass/nav.scss');
import React from 'react';

export default class nav extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        document.getElementById('nav-hide').onclick = function(e) {
            document.querySelector('#nav').classList.remove('active');
            document.querySelector('.base-body').classList.remove('active');
        }
    }

    render() {
        return (
            <div id="nav" className="nav">
                <div id="nav-group">
                    <div className="nav-unit active">
                        <div className="nav-img">
                            <img src="../img/icon_nav/heart.png"></img>
                        </div>
                        <div className="nav-name">热门推荐</div>
                    </div>
                    <div className="nav-unit">
                        <div className="nav-img">
                            <img src="../img/icon_nav/hot.png"></img>
                        </div>
                        <div className="nav-name">热门群组</div>
                    </div>
                    <div className="nav-unit">
                        <div className="nav-img">
                            <img src="../img/icon_nav/talk.png"></img>
                        </div>
                        <div className="nav-name">话题</div>
                    </div>
                    <div className="nav-unit">
                        <div className="nav-img">
                            <img src="../img/icon_nav/activity.png"></img>
                        </div>
                        <div className="nav-name">活动</div>
                    </div>
                    <div className="nav-unit">
                        <div className="nav-img">
                            <img src="../img/icon_nav/me.png"></img>
                        </div>
                        <div className="nav-name">我的主页</div>
                    </div>
                    <div className="nav-unit">
                        <div className="nav-img">
                            <img src="../img/icon_nav/self.png"></img>
                        </div>
                        <div className="nav-name">关于我们</div>
                    </div>
                </div>
                <div id="nav-hide"></div>
            </div>
        )
    }
}
