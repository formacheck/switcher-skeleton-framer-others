import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/skeleton"}>Skeleton</Link></li>
                <li><Link to={"/loader"}>Loader</Link></li>
                <li><Link to={"/qrcode"}>Qrcode</Link></li>
            </ul>
        </div>
    )
}

export default Navbar