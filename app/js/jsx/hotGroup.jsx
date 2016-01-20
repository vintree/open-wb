require('../sass/hotGroup.scss');
import react from "react";
import reactRom from "react-dom";
import $ from 'jquery';


import GroupsTab from "../common/groupsTab.jsx";


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
