import React from 'react'
import Navbar from './Navbar';
import QRCode from "react-qr-code";
// https://github.com/rosskhanas/react-qr-code

const Qrcode = () => {
    return (
        <div className="card">

            <Navbar />


            <div>
                <QRCode
                    size={256}
                    bgColor='white'
                    fgColor='black'
                    value='subscribe to website'
                />
            </div>


            {/* if you scann that image it will show you the value. you can put a link there instead */}

        </div>
    )
}

export default Qrcode