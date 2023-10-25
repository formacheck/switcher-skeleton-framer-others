import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

// import '../App.css'
import '../switcher.scss'
// import '../index.css'


const Home = () => {

    const [colorTheme, setColorTheme] = useState('theme-white')
    useEffect(() => {
        const currentthemecolor = localStorage.getItem('theme-color');
        if (currentthemecolor) {
            setColorTheme(currentthemecolor)
        }
    }, [])


    const handleTheme = (themeColor) => {
        setColorTheme(themeColor)
        localStorage.setItem('theme-color', themeColor);
    }

    return (
        <div className={`App card ${colorTheme}`}>

            <Navbar />

            <div className='theme-options'>
                <div id='theme-white' onClick={() => handleTheme('theme-white')}
                    className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
                />
                <div id='theme-blue' onClick={() => handleTheme('theme-blue')}
                    className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
                />
                <div id='theme-orange' onClick={() => handleTheme('theme-orange')}
                    className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
                />
                <div id='theme-purple' onClick={() => handleTheme('theme-purple')}
                    className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
                />
                <div id='theme-green' onClick={() => handleTheme('theme-green')}
                    className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
                />
                <div id='theme-black' onClick={() => handleTheme('theme-black')}
                    className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
                />
            </div>

            <div className='content-box'>
                <h3>Multiple Theme Switcher / React</h3>
                <h5>(Reactjs, SCSS/CSS, Local Storage)</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    accusamus nisi, voluptatem incidunt et consequatur ea aliquid, tempore,
                    nobis excepturi minus nihil? Rem impedit error esse beatae, totam enim eum.
                </p>
                <p>-- formacheck --</p>
            </div>



        </div>
    )
}

export default Home