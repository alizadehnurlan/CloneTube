import './Home.css'
import Sidebar from '../../Components/Sidebar'
import Feed from '../../Components/Feed'


const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed/>
      </div>

    </>
  )
}

export default Home