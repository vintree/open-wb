require('../../sass/photo.scss');
import React from 'react';

export default class Photo extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="photo">
                <div id="photo-group">
                    <div className="photo-1">
                        <div id="photo-1-label">
                            <div id="photo-name">群相册</div>
                            <div id="photo-num">220</div>
                        </div>
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                    <div className="photo-1">
                        <img src="../img/photo.png" />
                    </div>
                </div>
            </div>
        )
    }
}