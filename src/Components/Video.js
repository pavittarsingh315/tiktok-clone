import React, { useRef, useState } from 'react';
import '../css/Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar'

function Video({ url, channel, caption, song, likes, comments, shares }) {

    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isPlaying) {
            videoRef.current.pause()
            setIsPlaying(false)
        } else {
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    return (
        <div className='video'>

            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="video__player"
                loop
                src={url}
            ></video>
            <VideoFooter 
                channel={channel}
                caption={caption} 
                song={song} 
            />
            <VideoSidebar 
                likes={likes} 
                comments={comments} 
                shares={shares} 
            />

        </div>
    )
}

export default Video
