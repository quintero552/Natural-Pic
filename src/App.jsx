// import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import Favorites from './views/Favorites'
import Home from './views/Home'
import './App.css'
// import MyContextProvider from './context/MyContext'
// const PHOTO_URL = '/photos.json'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorites />} />
      </Routes>
    </div>
  )
}
export default App
