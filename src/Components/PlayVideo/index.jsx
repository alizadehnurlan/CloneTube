import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY } from "../../Data/data"
import { value_converter } from "../../Data/data"
import moment from 'moment'

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null)

  console.log(apiData)
  const fetchVideoData = async () => {
    const videoDetailsUrl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    await fetch(videoDetailsUrl).then(res => res.json()).then(data => setApiData(data.items[0]))
  }

  useEffect(() => {
    fetchVideoData()
  }, [])

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay ></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull;{apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} />{apiData ? value_converter(apiData.statistics.likeCount) : 125}</span>
          <span><img src={dislike} />25</span>
          <span><img src={share} />Share</span>
          <span><img src={save} />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} />
        <div>
          <p> {apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0,250) : "Description Here"}</p>
        <hr />
        <h4>1{apiData ? apiData.statistics.commentCount : 130} Comments</h4>
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