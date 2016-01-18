require('../../sass/hot.scss');
import React from 'react';
//import $ from 'jquery';

export default class Tag extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="tag">
                <div id="tag-group">
                    <div id="tag-1">
                        <div id="tag-1-name">群标签</div>
                        <div id="tag-1-num">5</div>
                    </div>
                    <div id="tag-2">
                        <div className="tag-2-group">
                            <span className="tag-2-group-sysTag">科技智联</span>
                            <span className="tag-2-group-sysTag">互联网创业</span>
                            <span className="tag-2-group-sysTag">粉丝</span>
                        </div>
                        <div className="tag-2-group">
                            <span className="tag-2-group-customTag">牛人们</span>
                            <span className="tag-2-group-customTag">科技极客</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}