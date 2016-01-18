require('../../sass/member.scss');
import React from 'react';
//import $ from 'jquery';

export default class Member extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="member">
                <div id="member-group">
                    <div id="member-1">
                        <div id="member-1-name">群成员</div>
                        <div id="member-1-num">210</div>
                    </div>
                    <div id="member-2">
                        <div id="member-2-owner">
                            <img src="../img/headImg@1x.png" />
                            <div id="member-2-owner-tag">群主</div>
                        </div>
                        <div id="member-2-member-group">
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                            <div className="member-2-member"><img src="../img/headImg@1x.png" /></div>
                        </div>
                    </div>
                    <div id="member-3">
                        <div id="member-3-img">
                            <img src="../img/right@1.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
