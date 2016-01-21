require('../../sass/hotGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";


import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';


import GroupTab from "../common/groupTab.jsx";
import GroupList from "../common/groupList.jsx";

autoFont.init();

class HotGroup extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <section>
                    <GroupTab></GroupTab>
                </section>
                <section>
                    <GroupList></GroupList>
                </section>
                
            </div>
        )
    }
}

ReactDOM.render(<HotGroup name="Nate" />, document.getElementById('hotGroup-content'));
