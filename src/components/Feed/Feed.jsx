import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const Feed = () => {
    const { query } = useParams() // Retrieve query parameter from URL
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        q: query || 'RD Congo musique congolaise sport rd congo politique rd congo', // Default category if no search
                        hl: 'fr',
                        regionCode: 'FR',
                        key: API_KEY,
                        maxResults: 40
                    }
                })
                setData(response.data.items)
            } catch (error) {
                console.error('Error fetching YouTube data:', error)
            }
        }

        fetchVideos()
    }, [query, API_KEY])

    return (
        <div className='feed'>
            {data.map((video) => (
                <Link to={`/video/${video.id.videoId}`} className="card" key={video.id.videoId}>
                    <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                    <h2>{video.snippet.title}</h2>
                    <h3>{video.snippet.channelTitle}</h3>
                    <p> 15k vues &bull {moment(video.snippet.publishedAt).fromNow()}...</p>
                </Link>
            ))}

        </div>
    )
}

export default Feed
