import React, { useState, useEffect } from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Video = () => {
  const { videoId } = useParams()
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

  const [video, setVideo] = useState(null)
  const [channelId, setChannelId] = useState(null) // variable to store channel ID
  const [channelData, setChannelData] = useState(null) // variable to store channel data
  const [comments, setComments] = useState([]) // variables to store comments data

  useEffect(() => {
    // Fetch video details
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet,contentDetails,statistics',
            id: videoId,
            key: API_KEY,
          },
        })
        const videoData = response.data.items[0]
        setVideo(videoData)
        setChannelId(videoData.snippet.channelId) 
      } catch (error) {
        console.error('Error fetching video data:', error)
      }
    }

    fetchVideoDetails()
  }, [videoId, API_KEY])

  useEffect(() => {
    if (channelId) {
      // now  channel details can be fetched after channelId is set
      const fetchChannelDetails = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
              part: 'snippet,statistics',
              id: channelId,
              key: API_KEY,
            },
          })
          setChannelData(response.data.items[0]) 
        } catch (error) {
          console.error('Error fetching channel data:', error)
        }
      }

      fetchChannelDetails()
    }
  }, [channelId, API_KEY])

 
  useEffect(() => {
    // now  comments for the video can be easily fetched
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
          params: {
            part: 'snippet',
            videoId: videoId,
            key: API_KEY,
            maxResults: 10,
          },
        })
        setComments(response.data.items)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    fetchComments()
  }, [videoId, API_KEY])

  if (!video || !channelData) {
    return <p>Loading...</p>
  }

  

  // Destructuring the video and channel objects
  const { snippet: videoSnippet, statistics: videoStatistics } = video
  const { snippet: channelSnippet, statistics: channelStatistics } = channelData

  /*
   Variables about a particular video that can be shared
   with other components and be reused 
  */
  const channelTitle = videoSnippet.channelTitle
  const description = videoSnippet.description
  const title = videoSnippet.title
  const publishedAt = videoSnippet.publishedAt

  // Video statistics
  const commentCount = videoStatistics.commentCount
  const favoriteCount = videoStatistics.favoriteCount
  const likeCount = videoStatistics.likeCount
  const viewCount = videoStatistics.viewCount

  // Channel details
  const channelDescription = channelSnippet.description
  const subscriberCount = channelStatistics.subscriberCount
  const channelLogo = channelSnippet.thumbnails.default.url

  return (
    <div className='play-container'>
      <PlayVideo 
        videoId={videoId}
        channelTitle={channelTitle}
        description={description}
        title={title}
        publishedAt={publishedAt}
        commentCount={commentCount}
        favoriteCount={favoriteCount}
        likeCount={likeCount}
        viewCount={viewCount}
        channelDescription={channelDescription}
        subscriberCount={subscriberCount}
        channelLogo = {channelLogo}
        comments={comments}
      />
      <Recommended />
    </div>
  )
}

export default Video
