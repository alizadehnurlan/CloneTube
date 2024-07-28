import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay ></video>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days about</p>
        <div>
          <span><img src={like} />125</span>
          <span><img src={dislike} />25</span>
          <span><img src={share} />Share</span>
          <span><img src={save} />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} />
        <div>
          <p> GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non eligendi, adipisci in atque praesentium ducimus minus animi dolorem nemo explicabo possimus incidunt temporibus voluptates quibusdam a at ipsum placeat?</p>
            <div className="comment-action">
              <img src={like} />
              <span>245</span>
              <img src={dislike} />
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non eligendi, adipisci in atque praesentium ducimus minus animi dolorem nemo explicabo possimus incidunt temporibus voluptates quibusdam a at ipsum placeat?</p>
            <div className="comment-action">
              <img src={like} />
              <span>245</span>
              <img src={dislike} />
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non eligendi, adipisci in atque praesentium ducimus minus animi dolorem nemo explicabo possimus incidunt temporibus voluptates quibusdam a at ipsum placeat?</p>
            <div className="comment-action">
              <img src={like} />
              <span>245</span>
              <img src={dislike} />
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non eligendi, adipisci in atque praesentium ducimus minus animi dolorem nemo explicabo possimus incidunt temporibus voluptates quibusdam a at ipsum placeat?</p>
            <div className="comment-action">
              <img src={like} />
              <span>245</span>
              <img src={dislike} />
              <p>18</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non eligendi, adipisci in atque praesentium ducimus minus animi dolorem nemo explicabo possimus incidunt temporibus voluptates quibusdam a at ipsum placeat?</p>
            <div className="comment-action">
              <img src={like} />
              <span>245</span>
              <img src={dislike} />
              <p>18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo