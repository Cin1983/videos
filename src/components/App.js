import React from "react";
import './App.css';
import Searchbar from "./Searchbar";
import VideoDetail from "./VideoDetail";
import VideoItem from "./VideoItem";
import VideoList from "./VideoList";

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <Searchbar />
        <VideoDetail />
        <VideoList />
        <VideoItem />
      </div>
    );
  };
}
export default App;
