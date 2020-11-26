import React, { useState } from 'react';
import '../css/VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';


function VideoSidebar({ likes, shares, comments }) {

    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__buttons">
                {/* ternary operator says if isLiked is true then show filled heart if not show unfilled. onClick sets the state
                    on which the ternary is based off of.
                */}
                { isLiked ? (
                    <FavoriteIcon fontSize="large" onClick={e => setIsLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={e => setIsLiked(true)} />
                )}
                {/* ternary operator says if isLiked is true add a like if not keep at 69. this is just a placeholder real # of likes
                    should come from firebase
                */}
                <p>{ isLiked ? likes + 1 : likes }</p>
            </div>
            <div className="videoSidebar__buttons">
                <MessageIcon fontSize="large" />
                <p>{comments}</p>
            </div>
            <div className="videoSidebar__buttons">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;
