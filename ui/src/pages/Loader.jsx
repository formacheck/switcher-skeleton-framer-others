import React, { useState } from 'react'
import Navbar from './Navbar'
import { Audio } from 'react-loader-spinner' // check the documentation for more spinners https://mhnpd.github.io/react-loader-spinner/docs/intro
import "../App.css"

const Loader = () => {
    const [loading, setLoading] = useState(true)
    return (
        <div className="card">

            <Navbar />

            <div className='grid'>
                <button onClick={() => setLoading(!loading)}> toogle loader</button>
                <div className='item'>
                    {loading ? <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color='green'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    /> : ''}
                </div>
            </div>


        </div>
    )
}

export default Loader