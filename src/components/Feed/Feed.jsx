import React, { useEffect, useState } from 'react';
import './Feed.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feed = ({ category, searchQuery }) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: searchQuery || category,
            key: API_KEY,
            maxResults: 40,
          },
        });
        setData(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchQuery, category, API_KEY]); // Fetch data when searchQuery or category changes

  return (
    <div className="feed">
      {loading && <p>Loading...</p>}
      {!loading && data.length === 0 && <p>No videos found.</p>}
      {!loading && data.map((video) => (
        <Link to={`/video/${video.id.videoId}`} className="card" key={video.id.videoId}>
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
          <h2>{video.snippet.title}</h2>
          <h3>{video.snippet.channelTitle}</h3>
          <p>{video.snippet.publishedAt}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
