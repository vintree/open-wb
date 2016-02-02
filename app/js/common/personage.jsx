// require('../../sass/personage.scss');
import React from 'react';
// import $ from 'jquery';

export default class Personage extends React.Component {
    constructor(props) {
        super();
        this.state = props;
    }
    render() {
        return (
            <div id="personage" className="gap">
                <div id="personage-group">

                </div>
            </div>
        )
    }
}
