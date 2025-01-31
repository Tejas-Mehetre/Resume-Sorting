import React from 'react'
import img from '../../assets/contactimg.png'
import '../../Css/home.css'

function Contact() {
  return (
    <div className='contactmain'>
      <div className="contactimg">
        <img src={img} alt="" />
      </div>
      <div className="contacttext">
        <a href="">Contact us</a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Contact
