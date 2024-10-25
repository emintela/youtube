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

const PlayVideo = (props) => {
  
 const videoId = props.videoId
 const channelTitle = props.channelTitle
 const description = props.description
 const title = props.title
 const publishedAt = props.publishedAt
 const commentCount = props.commentCount
 const favoriteCount = props.favoriteCount
 const likeCount = props.likeCount
 const viewCount = props.viewCount
 const channelDescription= props.channelDescription
 const subscriberCount= props.subscriberCount
 const channelLogo = props.channelLogo

  
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
          <div className="comment">
            <img src={user_profile} alt="profile"/>
            <div>
              <h3>Eddy Mintela <span>1 day ago</span></h3>
              <p>
                What Rice and others are missing is that they didn't score in great part because Villa played hard as a team and because of Emery's tactics. Don't forget we hit the post 3 times too, so we had chances too.
                We won that match and forced Arsenal into playing the way they did.
              </p>
              <div className="comment-action">
                <img src={like} alt="like"/>
                <span>27</span>
                <img src={dislike} alt="dislike"/>
                <span>4</span>
              </div>
            </div>
          </div>

          <div className="comment">
            <img src={user_profile} alt="profile"/>
            <div>
              <h3>Eddy Mintela <span>1 day ago</span></h3>
              <p>
                What Rice and others are missing is that they didn't score in great part because Villa played hard as a team and because of Emery's tactics. Don't forget we hit the post 3 times too, so we had chances too.
                We won that match and forced Arsenal into playing the way they did.
              </p>
              <div className="comment-action">
                <img src={like} alt="like"/>
                <span>27</span>
                <img src={dislike} alt="dislike"/>
                <span>4</span>
              </div>
            </div>
          </div>

          <div className="comment">
            <img src={user_profile} alt="profile"/>
            <div>
              <h3>Eddy Mintela <span>1 day ago</span></h3>
              <p>
                What Rice and others are missing is that they didn't score in great part because Villa played hard as a team and because of Emery's tactics. Don't forget we hit the post 3 times too, so we had chances too.
                We won that match and forced Arsenal into playing the way they did.
              </p>
              <div className="comment-action">
                <img src={like} alt="like"/>
                <span>27</span>
                <img src={dislike} alt="dislike"/>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    
    
  );
};

export default PlayVideo;