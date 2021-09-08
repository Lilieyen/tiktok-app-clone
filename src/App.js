import './App.css';
import Video from './Video';
import { useEffect, useState } from "react";
import axios from './axios'

function App() {
  /* eslint-disable */
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // this will make an API call to the backend
    async function fetchPosts() {
      // here we're pulling from the v2/posts(our actual MongoDB)
      const response = await axios.get("/v2/posts")
      setVideos(response.data) // the data comes back inside of that response

      return response;
    }

    fetchPosts();
  }, []);
  
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(( { url, channel, description, song, likes, messages, shares }) => (
          <Video 
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
            />
        ))}
      </div>
    </div>

  );
}

export default App;
