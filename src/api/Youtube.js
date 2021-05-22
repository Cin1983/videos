import axios from 'axios';

const API_KEY = 'AIzaSyCC5dKGyjYBQHo9XDrKqrw-nDxUa7SWr1Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key:API_KEY 
    }
 
});