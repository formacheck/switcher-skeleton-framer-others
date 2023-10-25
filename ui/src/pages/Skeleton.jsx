import React from 'react'
import Navbar from './Navbar'
import Articles from '../skeletons/Articles'
import User from '../skeletons/User'
import './skelon.css'

const Skeleton = () => {
    return (
        <div className='App'>
            <Navbar />
            <header>
                <h1>React Skeletons</h1>
            </header>

            <div className="content">
                <Articles />
                <User />
            </div>

        </div>
    )
}

export default Skeleton