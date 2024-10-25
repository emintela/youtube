import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png'; // Corrected import
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg'; // Corrected variable name
import { useParams } from 'react-router-dom';
import moment from 'moment';

const PlayVideo = ({ 
  videoId,
  channelTitle,
  description,
  title,
  publishedAt,
  commentCount,
  favoriteCount,
  likeCount,
  viewCount,
  channelDescription,
  subscriberCount,
  channelLogo,
  comments 
  // using props destructuring to pass all elements as props at once
}) => {

  
  return (
    <div className="play-video">
       
      
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
     
      <h3>{title}</h3>
     
      <div className="play-video-info">
        <p>{viewCount} views &bull; {moment(publishedAt).fromNow()}...</p>
        <div>
          <span><img src={like} alt="like"/>{likeCount}</span>
          <span><img src={dislike} alt="dislike"/>{}</span>
          <span><img src={share} alt="share"/>Share</span>
          <span><img src={save} alt="save"/>Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <div>
        <img src={channelLogo ? channelLogo : jack} alt={channelTitle} />
          
            <p>{channelTitle}</p>
             <span>{subscriberCount} Subscribers</span>
        </div>
          
            <button>Subscribe</button>
        </div>

        <div className="video-description">
          <p>{description.slice(0,400)}...</p>
           <hr/>
          <h4>{commentCount} Comments</h4>
          
       
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <img
                src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl || user_profile}
                alt="profile"
              />
              <div>
                <h3>
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}{' '}
                  <span>{new Date(comment.snippet.topLevelComment.snippet.publishedAt).toLocaleDateString()}</span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="like" />
                  <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="dislike" />
                  <span>{}</span> 
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
 </div>

        
        
    
    
    
  );
};

export default PlayVideo;