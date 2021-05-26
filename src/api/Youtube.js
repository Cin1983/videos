import axios from "axios";

const API_KEY = "AIzaSyCC5dKGyjYBQHo9XDrKqrw-nDxUa7SWr1Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: API_KEY,
    type: "video",
    part: "snippet",
    maxResults: 5
  }
});
