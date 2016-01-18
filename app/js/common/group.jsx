require('../../sass/group.scss');
import React from 'react';
import $ from 'jquery';

export default class Group extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div id="group">
                <div id="group-group">
                    <div id="group-1">
                        <div id="group-1-name">他的群组</div>
                        <div id="group-1-num">20</div>
                    </div>
                    <div id="group-2">
                        <div className="group-2-unit">
                            <div className="group-2-img"><img src="../img/headImg@1x.png" /></div>
                            <div className="group-2-name">寻龙诀影迷</div>
                        </div>
                        <div className="group-2-unit">
                            <div className="group-2-img"><img src="../img/headImg@1x.png" /></div>
                            <div className="group-2-name">治疗系</div>
                        </div>
                        <div className="group-2-unit">
                            <div className="group-2-img"><img src="../img/headImg@1x.png" /></div>
                            <div className="group-2-name">游戏玩家</div>
                        </div>
                        <div className="group-2-unit">
                            <div className="group-2-img"><img src="../img/headImg@1x.png" /></div>
                            <div className="group-2-name">猫耳朵</div>
                        </div>
                        <div className="group-2-unit">
                            <div className="group-2-img"><img src="../img/headImg@1x.png" /></div>
                            <div className="group-2-name">下午时光</div>
                        </div>

                    </div>
                    <div id="group-3">
                        <div id="group-3-img">
                            <img src="../img/right@1.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
