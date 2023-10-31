import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skeleton from './pages/Skeleton'
import Loader from './pages/Loader'
import Qrcode from './pages/Qrcode'

// import './App.css'
// import './switcher.scss'

function App() {


  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skeleton' element={<Skeleton />} />
            <Route path='/loader' element={<Loader />} />
            <Route path='/qrcode' element={<Qrcode />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
