require('../../sass/groupTab.scss');
import React from 'react';
import $ from 'jquery';

export default class GroupTab extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div id="groupTab">
                <div id="groupTab-left"></div>
                <div id="groupTab-right"></div>
                <div id="groupTab-center">
                    <div className="groupTab-unit active">最新</div>
                    <div className="groupTab-unit">最火</div>
                    <div className="groupTab-unit">投资</div>
                    <div className="groupTab-unit">媒体人</div>
                    <div className="groupTab-unit">职业</div>
                    <div className="groupTab-unit">空间</div>
                    <div className="groupTab-unit">运动</div>
                    <div className="groupTab-unit">美容</div>
                    <div className="groupTab-unit">职业</div>
                    <div className="groupTab-unit">空间</div>
                    <div className="groupTab-unit">职业</div>
                    <div className="groupTab-unit">空间</div>
                </div>
            </div>
        );
    }
}
