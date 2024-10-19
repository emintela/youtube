import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png'; // Corrected import
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg'; // Corrected variable name

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel to Learn Web Development</h3>
      <div className="play-video-info">
        <p>1523 views &bull; 2 days ago...</p>
        <div>
          <span><img src={like} alt="like"/>125</span>
          <span><img src={dislike} alt="dislike"/>2</span>
          <span><img src={share} alt="share"/>Share</span>
          <span><img src={save} alt="save"/>Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <div>
            <img src={jack} alt="publisher"/>
          
            <p>GreatestStack</p>
             <span>1M Subscribers</span>
        </div>
          
            <button>Subscribe</button>
        </div>

        <div className="video-description">
          <p>GreatestStack, the channel that makes Web Development Easier</p>
          <p>Subscribe to learn more and more about Web Development and other skills in the field of tech..</p>
          <hr/>
          <h4>132 Comments</h4>
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