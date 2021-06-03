import  {useState, useEffect} from 'react'
import youtube from "../api/Youtube"



const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);
    
    const search = async (myInput) => {
        const response = await youtube.get("/search",{
            params: {
                q: myInput,
            }
        });
        setVideos(response.data.items)
    };

    return [videos, search];
}

export default useVideos
