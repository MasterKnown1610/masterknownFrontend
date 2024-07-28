import React from 'react'
import './master.css'
import { FaMobile ,FaLaptopCode,FaHandshake } from "react-icons/fa";
import Box from '../../boxes/Box.jsx'


const Master = () => {
  return (
    <div className='master-container'>
      <div className='top-heading'>
        <div className='master-heading'>
          <h3>Master</h3>
        </div>
        <div className='passion-heading'>
          <h1>A Passion For Shaping The New Tech world</h1>
        </div>
      </div>

      {/* <div className='boxes'>
        <div className='webbox'>
        <FaLaptopCode />
          <h3>Web Development</h3>
          <p>At MasterKnown, we pioneer the creation of secure, user-friendly web applications. Harnessing technologies like blockchain for heightened security and privacy, paired with an emphasis on intuitive UI/UX, we craft digital experiences that seamlessly cater to our clients' needs.</p>
        </div>
        <div className='appbox'>
        <FaMobile />
          <h3>App Development</h3>
          <p>
          At MasterKnown, we pioneer the creation of secure, user-friendly web applications. Harnessing technologies like blockchain for heightened security and privacy, paired with an emphasis on intuitive UI/UX, we craft digital experiences that seamlessly cater to our clients' needs.
          </p> 
        </div>
        <div className='techbox'>
        <FaHandshake />
          <h3>Technologies</h3>
          <p>
          MasterKnown stands at the forefront of technology adoption, selecting the perfect and upgraded tools for website development. Our meticulous approach ensures that each website is crafted with precision and innovation. We prioritize staying ahead with the latest technologies to provide our clients with a digital presence that exceeds expectations.
          </p>
        </div> 
     </div>  */}

     <Box/>
    </div>
  
  )
}

export default Master