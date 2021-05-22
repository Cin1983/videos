import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import VideoDetail from "./VideoDetail";
import VideoItem from "./VideoItem";
import VideoList from "./VideoList";
import Youtube from "../api/Youtube";
class App extends React.Component {
  state = { videos: [] };

  onMyInputSubmit = async myInput => {
   const response= await Youtube.get("/search", {
      params: {
        q: myInput,
      },
   });
    
    this.setState({ videos: response.data.items })
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onMyInputSubmit={this.onMyInputSubmit} />
        <VideoList videos={this.state.videos} />
        <VideoDetail />
        <VideoItem />
      </div>
    );
  }
}
export default App;
