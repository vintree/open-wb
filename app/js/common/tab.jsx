require('../../sass/tab.scss');
import React from 'react';
import $ from 'jquery';

export default class Tab extends React.Component {
    constructor(props) {
        super();
        this.state = props;
    }
    render() {
        var tab = this.state.data;
        var tabNode = tab.map(function(_tab) {
            return (
                <div className={'tab-tx ' + _tab.active} role={_tab.codeName} key={_tab.codeName}>{_tab.name}</div>
            )
        });
        return (
            <div id="tab" className="gap">
                <div id="tab-group">
                    {tabNode}
                </div>
            </div>
        )
    }
}
