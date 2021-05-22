import React from 'react';

const VideoItem = ({ video }) => {
    return(
        <div>
            <img src={video.snippet.tumbnails.medium.url} alt={video}/>
            {video.snippet.title}
    </div>
    )
    };

export default VideoItem;
