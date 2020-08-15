import React from 'react';
import '../css/VideoRow.css'

function VideoRow({ views, subs, description, timestamp, image, title, channel }) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />

            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videRow__headline">
                    {channel} . {" "}
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber"> {subs} </span> Subscribers </span> {" "} {views} . {timestamp}

                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow;
