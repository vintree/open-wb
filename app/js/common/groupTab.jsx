require('../../sass/groupTab.scss');
import React from 'react';
import Superagent from 'superagent';
import InjectTapEventPlugin from "react-tap-event-plugin";
import Immutable from 'immutable';

import FormatAjax from '../temp/formatAjax.js';
import Vars from '../temp/vars.js';
import Unicode from '../temp/unicode.js';

InjectTapEventPlugin();


export default class GroupTab extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        // console.log(this.props.hotTagList);
        // console.log(nextProps.hotTagList);
        // console.log(Immutable.is(this.props.hotTagList, nextProps.hotTagList));

        // if(Immutable.is(this.props.hotTagList, nextProps.hotTagList)) {
        //     return false;
        // }
        // return true;
        return true;
    }

    render() {
        let hotTagList = this.props.hotTagList || [];
        hotTagList = hotTagList.map((v, ix) => {
            return (
                <div key={v.trid} className={'groupTab-unit ' + v.active} data-tag={v.trid} data-ix={ix}>{v.name}</div>
            )
        });
        return (
            <div id="groupTab">
                <div id="groupTab-center">
                    <div id="groupTab-overflow">
                        {hotTagList}
                    </div>
                </div>
            </div>
        );
    }
}

// <div id="groupTab-left"></div>
// <div id="groupTab-right"></div>
