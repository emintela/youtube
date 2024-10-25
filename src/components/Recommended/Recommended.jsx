import './Recommended.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Recommended = () => {
  const category = "RD Congo musique congolaise sport rd congo politique rd congo";
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: category,
            hl: 'fr',
            regionCode: 'FR',
            key: API_KEY,
            maxResults: 40,
          },
        });
        setData(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    fetchVideos();
  }, [category, API_KEY]);

  return (
    <div className="recommended">
      {data.map((video) => (
        <Link to={`/video/${video.id.videoId}`} className="side-video-list" key={video.id.videoId}>
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
          <div className="vid-info">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.channelTitle}</p>
            <p>15k vues &bull; {moment(video.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
