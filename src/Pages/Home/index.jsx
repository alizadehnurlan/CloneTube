import './Home.css'
import Sidebar from '../../Components/Sidebar'
import Feed from '../../Components/Feed'
import { useState } from 'react'


const Home = ({ sidebar }) => {

  const [category,setCategory]=useState(0)

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} setCategory={setCategory} />
      </div>

    </>
  )
}

export default Home