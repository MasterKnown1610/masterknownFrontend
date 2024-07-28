import React from 'react'
import './footer.css'
import img9 from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='img-div'>
        
        <img className='img9' src={img9} alt="image" />
        
        <div className='welcome-text'>
          <h1>Welcome to The World of New Technology</h1>
        </div>
      </div >
      <div className='information'>
      <div className='archives'>
        <ul >
          <li>
            <h3> Archives</h3>
            <h3>Blockchain Integration</h3>
            <h3> Client Success Stories</h3>
            <h3> Security Excellence</h3> 
          </li>
        </ul>
      </div>

      <div className='about'>
        <ul>
          <li>
            <h3> About</h3>
            <h3>Our story</h3>
            <h3>Experts</h3>
            <h3>Pricing</h3>
            <h3>Contact us</h3>
          </li>
        </ul>
      </div>
      <div className='getintouch'>
        <ul>
          <li>
            <h3> Get in touch</h3>
            <h3>Madhapur, Hyderabad,Telangana</h3>
            <h3> +91-9347772116</h3>
            <h3>masterknownmk@gmail.com</h3>
          </li>
        </ul>
      </div>
        <div className='services'>
          <ul>
            <li>
              <h3>Services</h3>
              <h3>Web Development</h3>
              <h3>App Development</h3>
              <h3>Server Development</h3>
              <h3>Customer Service</h3>
              
            </li>
         </ul>
        </div>
    </div>
    </div>


    
  )
}

export default Footer