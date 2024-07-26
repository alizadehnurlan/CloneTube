import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from '../src/Pages/Home'
import Video from '../src/Pages/Video'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App