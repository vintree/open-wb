require('../../sass/follow.scss');
import React from 'react';
import $ from 'jquery';

export default class Follow extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
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
                        <div className="follow-2-img"><img src={this.props.vars.path + "img/headImg@1x.png"}></img></div>
                        <div className="follow-2-img"><img src={this.props.vars.path + "img/headImg@1x.png"}></img></div>
                        <div className="follow-2-img"><img src={this.props.vars.path + "img/headImg@1x.png"}></img></div>
                        <div className="follow-2-img"><img src={this.props.vars.path + "img/headImg@1x.png"}></img></div>
                        <div className="follow-2-img"><img src={this.props.vars.path + "img/headImg@1x.png"}></img></div>
                        <div className="follow-2-img"><img src={this.props.vars.path + "img/headImg@1x.png"}></img></div>
                    </div>
                    <div id="follow-3">
                        <div id="follow-3-img">
                            <img src={this.props.vars.path + "img/right@1.png"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
