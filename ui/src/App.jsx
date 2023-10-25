import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skeleton from './pages/Skeleton'

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
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
