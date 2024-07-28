import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from '../src/Pages/Home'
import Video from '../src/Pages/Video'
import { useState } from "react"

const App = () => {

const [sidebar,setSidebar]=useState(true)

  return (
    <div>
      <Navbar sidebar={sidebar}  setSidebar={ setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App