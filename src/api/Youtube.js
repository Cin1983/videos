import axios from "axios";


const KEY = `AIzaSyCC5dKGyjYBQHo9XDrKqrw-nDxUa7SWr1Q`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: KEY,
    type: "video",
    part: "snippet",
    maxResults: 5
  }
});
