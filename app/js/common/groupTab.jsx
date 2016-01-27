require('../../sass/groupTab.scss');
import React from 'react';
import $ from 'jquery';

export default class GroupTab extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const TabList = this.props.tab.map((v, ix) => {
            return (
                <div key={v.name} className={'groupTab-unit ' + v.active} data-tag={v.tag} data-ix={ix}>{ v.name }</div>
            )
        });
        return (
            <div id="groupTab">
                <div id="groupTab-left"></div>
                <div id="groupTab-right"></div>
                <div id="groupTab-center">
                    <div id="groupTab-overflow">
                        {TabList}
                    </div>
                </div>
            </div>
        );
    }
}
