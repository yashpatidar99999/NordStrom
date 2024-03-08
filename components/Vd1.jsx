import React from 'react'
import "../public/css/Vd1.css"
const Vd1 = () => {
  return (
    <div className="video_container">
        <video autoPlay muted loop>
            <source src="/video/brand.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Vd1