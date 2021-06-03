import React, { useState, useEffect } from "react";
import useVideos from '../Hooks/usevideos';
import "./App.css";
import Searchbar from "./Searchbar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('fashion');
  
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos]);

      // setSelectedVideo(response.data.items[0])
  return (
    <div className="ui container">
      <Searchbar onMyInputSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
