require('../../sass/groupList.scss');
import React from 'react';
import $ from 'jquery';

export default class GroupList extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div id="groupList">
                <div className="groupList-unit">
                    <div className="groupList-head">
                        <div className="groupList-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="groupList-msg">
                            <div className="groupList-mainInfo">
                                <div className="groupList-name">谁动了我的奶酪</div>
                                <span className="groupList-tag">我司官方</span>
                            </div>
                            <div className="groupList-info">
                                发数据库繁华落尽第三方好好发挥拉斯科啊绝色赌妃来看哈三菱电机反悔拉克丝大姐夫
                            </div>
                        </div>
                    </div>
                    <div className="groupList-px">
                        <div className="groupList-radius"></div>
                    </div>
                    <div className="groupList-body">
                        <div className="groupList-num">1280个成员</div>
                        <div className="groupList-member">
                            <span>圆圆、</span>
                            <span>吹吹、</span>
                            <span>小鱼儿、</span>
                            <span>杜拉拉、</span>
                            <span>鱼刺、</span>
                            <span>神奇宝贝、</span>
                        </div>
                        <div className="groupList-join">+ 加入</div>
                    </div>
                </div>

                <div className="groupList-unit">
                    <div className="groupList-head">
                        <div className="groupList-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="groupList-msg">
                            <div className="groupList-mainInfo">
                                <div className="groupList-name">谁动了我的奶酪</div>
                                <span className="groupList-tag">我司官方</span>
                            </div>
                            <div className="groupList-info">
                                发数据库繁华落尽第三方好好发挥拉斯科啊绝色赌妃来看哈三菱电机反悔拉克丝大姐夫
                            </div>
                        </div>
                    </div>
                    <div className="groupList-px">
                        <div className="groupList-radius"></div>
                    </div>
                    <div className="groupList-body">
                        <div className="groupList-num">1280个成员</div>
                        <div className="groupList-member">
                            <span>圆圆、</span>
                            <span>吹吹、</span>
                            <span>小鱼儿、</span>
                            <span>杜拉拉、</span>
                            <span>鱼刺、</span>
                            <span>神奇宝贝、</span>
                        </div>
                        <div className="groupList-join">+ 加入</div>
                    </div>
                </div>
            </div>
        );
    }
}
