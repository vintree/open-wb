require('../../sass/tab.scss');
import React from 'react';

export default class Tab extends React.Component {
    constructor(props) {
        super();
        this.state = props;
    }
    render() {
        var tab = this.state.data;
        var tabNode = tab.map(function(_tab, ix) {
            return (
                <div className={'tab-tx ' + _tab.active} role={_tab.codeName} key={_tab.codeName} data-ix={ix}>{_tab.name}</div>
            )
        });
        return (
            <div id="tab" className="gap">
                <div id="tab-left"></div>
                <div id="tab-right"></div>
                <div id="tab-center">
                    {tabNode}
                </div>
            </div>
        )
    }
}
