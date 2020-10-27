import React from 'react';

import "./comment.css";

export default function Comment(props) {
    var {image, name, text, time} = props;

    // Returns the time diference with a suffix on the end
    // of the string.
    function timeSinceComment() {
        var timeDiff = Math.floor((Date.now() - new Date(time)) / 1000);
        var timeSuffix = 's';

        if(timeDiff / (60 * 60 * 24 * 365) >= 1) {
            timeDiff = Math.floor(timeDiff / (60 * 60 * 24 * 365));
            timeSuffix = 'y';
        } else if(timeDiff / (60 * 60 * 24) >= 1) {
            timeDiff = Math.round(timeDiff / (60 * 60 * 24));
            timeSuffix = 'd';
        } else if(timeDiff / (60 * 60) >= 1) {
            timeDiff = Math.floor(timeDiff / (60 * 60));
            timeSuffix = 'h';
        } else if(timeDiff / 60 >= 1) {
            timeDiff = Math.floor(timeDiff / 60);
            timeSuffix = 'm';
        }

        return timeDiff + timeSuffix;
    }

    return (
        <div className="comment">
            { image ? 
            <img src={image} className="comment-image"></img>
            : 
            <div className="comment-image empty"></div>
            }
            <div>
                <p className="content"><strong>{name}</strong> {text}</p>
                <p className="time">{timeSinceComment()}</p>
            </div>
        </div>
    )
}