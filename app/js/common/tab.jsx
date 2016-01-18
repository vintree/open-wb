require('../../sass/tab.scss');
import React from 'react';
import $ from 'jquery';
import Member from "./member.jsx";
import Tag from "./tag.jsx";
import Related from "./related.jsx";
import Activity from "./activity.jsx";
import Photo from "./photo.jsx";
import Newest from "./newest.jsx";
import Hot from "./hot.jsx";

export default class Tab extends React.Component {
    constructor() {
        super();
        this.state = {
            newest: 'tab-newest',
            hot: 'tab-hot',
            details: 'tab-details',
            tabActive: ['active', '', '']
        }
    }
    toggleTab(e) {
        const node = e.target;
        const role = node.attributes.role.value;
        $(node).addClass('active')
            .siblings()
            .removeClass('active');
        $('#' + role).addClass('active')
            .siblings()
            .removeClass('active');
    }
    render() {
        return (
            <div id="">
                <div id="tab" className="gap">
                    <div id="tab-group" onClick={e => {this.toggleTab(e)}}>
                        <div className={'tab-tx ' + this.state.tabActive[0]} role={this.state.newest}>最新</div>
                        <div className={'tab-tx ' + this.state.tabActive[1]} role={this.state.hot}>热门</div>
                        <div className={'tab-tx ' + this.state.tabActive[2]} role={this.state.details}>详情</div>
                    </div>
                </div>
                <div id={this.state.newest} className={'tab-md ' + this.state.tabActive[0]}>
                    <Newest></Newest>
                </div>
                <div id={this.state.hot} className={'tab-md ' + this.state.tabActive[1]}>
                    <Hot></Hot>
                </div>
                <div id={this.state.details} className={'tab-md ' + this.state.tabActive[2]}>
                    <section id="fansGroup-member" className="gap">
                        <Member></Member>
                    </section>
                    <section id="fansGroup-tag" className="gap">
                        <Tag></Tag>
                    </section>
                    <section id="fansGroup-related" className="gap">
                        <Related></Related>
                    </section>
                    <section id="fansGroup-activity" className="gap">
                        <Activity></Activity>
                    </section>
                    <section className="gap">
                        <Photo></Photo>
                    </section>
                </div>
            </div>
        )
    }
}
