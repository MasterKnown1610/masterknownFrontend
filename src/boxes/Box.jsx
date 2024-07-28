import React from 'react'
import'./box.css';
import { FaMobile ,FaLaptopCode,FaHandshake } from "react-icons/fa";


const Box = () => {
  return (
    <div className='boxes'>
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
        </div>
  )
}

export default Box