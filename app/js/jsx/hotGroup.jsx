require('../../sass/hotGroup.scss');
import react from "react";
import reactRom from "react-dom";
import $ from 'jquery';


import GroupTab from "../common/groupTab.jsx";


class ListGroup extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <section id='hotGroup-head'>
                    <GroupTab></GroupTab>
                </section>
            </div>
        )
    }
}
