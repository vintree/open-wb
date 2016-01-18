require('../../sass/follow.scss');
import React from 'react';
import $ from 'jquery';

export default class Follow extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div id="follow">
                <div id="follow-group">
                    <div id="follow-1">
                        <div id="follow-1-name">他的关注</div>
                        <div id="follow-1-num">48</div>
                    </div>
                    <div id="follow-2">
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                        <div className="follow-2-img"><img src="../img/headImg@1x.png" /></div>
                    </div>
                    <div id="follow-3">
                        <div id="follow-3-img">
                            <img src="../img/right@1.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
