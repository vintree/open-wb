import React from 'react';

import Member from "./member.jsx";
import Tag from "./tag.jsx";
import Related from "./related.jsx";
import Activity from "./activity.jsx";
import Photo from "./photo.jsx";
// import Newest from "./newest.jsx";
// import Hot from "./hot.jsx";


export default class Details extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id={'tab-details'}>
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
        )
    }
}
