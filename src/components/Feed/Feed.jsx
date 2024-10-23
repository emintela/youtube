import React, { useEffect, useState } from 'react';
import './Feed.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Feed = (props) => {
    const category = props.category
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
    


    // function to fetch videos on page load and search parma change

 const [data, setData] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',  
            q: category,   // used a few congo related videos to fetch vidoes from congo since
                            // youtube api did not give an option to set location to congo
            hl: 'fr',             // Set French as the default language
            regionCode: 'FR', 
            key: API_KEY,    
            maxResults: 1000    
          }
        });
        setData(response.data.items);  // Set the video data to state
        console.log(response.data.items)
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    fetchVideos();
  }, [category]);  // Re-run the effect if the query changes

  return (
    <div className='feed'>

      {
        data.map((video)=>{
          return(
        <Link to={`/video/${video.id.videoId}`} className="card" key={video.id.videoId}>
            <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
            <h2>{video.snippet.title}</h2>
            <h3>GreetStack</h3>
            <p> 15k views &bull; 2 days ago...</p>
        </Link>

          )
        })
      }
       
        
        
        

    </div>
  )
}

export default Feed