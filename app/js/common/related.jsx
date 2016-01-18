require('../../sass/related.scss');
import React from 'react';
//import $ from 'jquery';

export default class Related extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="related">
                <div id="related-1-group">
                    <div id="related-1-label">相关公司</div>
                    <div id="related-1-name">深圳创客智能科技信息有限公司</div>
                </div>
                <div id="related-2-group">
                    <div id="related-2-1">
                        <div id="related-2-name">相关连接</div>
                        <div id="related-2-num">4</div>
                    </div>
                    <div id="related-2-2">
                        <div className="related-2-2-unit">
                            <div className="related-2-2-img">
                                <img src="../img/wechat.png" />
                            </div>
                            <div className="related-2-2-name">微信</div>
                        </div>
                        <div className="related-2-2-unit">
                            <div className="related-2-2-img">
                                <img src="../img/webo.png" />
                            </div>
                            <div className="related-2-2-name">微博</div>
                        </div>
                        <div className="related-2-2-unit">
                            <div className="related-2-2-img">
                                <img src="../img/app.png" />
                            </div>
                            <div className="related-2-2-name">APP</div>
                        </div>
                        <div className="related-2-2-unit">
                            <div className="related-2-2-img">
                                <img src="../img/web.png" />
                            </div>
                            <div className="related-2-2-name">网页</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}