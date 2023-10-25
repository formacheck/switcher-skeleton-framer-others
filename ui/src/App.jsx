import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import './switcher.scss'

function App() {


  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
