require('../sass/groupTab.scss');
import react from "react";
import reactRom from "react-dom";

export default class groupTab extends React.component {
    construct() {
        super();
    }
    render() {
        retrun (
            <div id="groupTab">
                <div className="groupTab-unit">最新</div>
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
        );
    }
}
