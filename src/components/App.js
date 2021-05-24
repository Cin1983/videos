import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import Youtube from "../api/Youtube";
class App extends React.Component {

  state = { videos: [], selectedVideo: [] };

  onMyInputSubmit = async (myInput) => {
    const response = await Youtube.get("/search", {
      params: {
        q: myInput,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onMyInputSubmit={this.onMyInputSubmit} />
        <VideoDetail video ={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
        
        
      </div>
    );
  }
}
export default App;
