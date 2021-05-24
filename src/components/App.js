import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import Youtube from "../api/Youtube";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onMyInputSubmit('fashion')
  }

  onMyInputSubmit = async (myInput) => {
    const response = await Youtube.get("/search", {
      params: {
        q: myInput
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onMyInputSubmit={this.onMyInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
