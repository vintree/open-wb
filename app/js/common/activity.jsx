require('../../sass/activity.scss');
import React from 'react';
//import $ from 'jquery';

export default class Tag extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="activity">
                <div id="activity-group">
                    <div id="activity-1">
                        <div id="activity-1-name">近期活动</div>
                        <div id="activity-1-num">6</div>
                    </div>
                    <div id="activity-2">
                        <div>
                            <div className="activity-2-label">
                                <span>要不要在北京举办一次粉丝见面会?</span>
                            </div>
                            <div className="activity-2-label">
                                <span>智能穿戴二代售价200大家觉得合理吗？</span>
                            </div>
                            <div className="activity-2-label">
                                <span>新产品中国北京媒体发布会年前举行还是年后？</span>
                            </div>
                        </div>
                        <div className="activity-more">
                            <img src="../img/right@1.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}