import React from 'react'
import icon1 from '../../assets/9.png'
import icon2 from '../../assets/Picture4.png'
import icon3 from '../../assets/Picture2.png'
import icon4 from '../../assets/Picture1.png'



const Tech = () => {
  return (
    <div className='tech-container'>
      <div>
        <h5>HAVE A LOOK AT OUR</h5>
        <h1>Technologies at MasterKnown</h1>
      </div>

      <div>
        <div>
          <h3>Blockchain Integration</h3>
          <h4>At MasterKnown, we specialize in integrating blockchain technology to fortify security and transparency, ensuring data integrity and instilling confidence in digital transactions and assets.</h4>
        </div>
        <img className ="image1"src={icon1} alt="pic1" />
      </div>

      <div>
        <img className='image2' src= {icon2} alt="pic2" />
        <div>
          <h3>Web Application Development</h3>
          <h4>Crafting bespoke web solutions tailored to diverse needs, our web development services ensure a seamless user experience, scalability, and responsiveness, elevating your digital presence.</h4>
        </div>
      </div>

      <div>
        <img className= 'image3'src= {icon3} alt="pic3" />
        <div>
          <h3>User-Centric Design</h3>
          <h4>Our design philosophy centers on creating intuitive and engaging user experiences, ensuring that every digital interaction is not just functional but also delightful, reflecting a commitment to user satisfaction.</h4>
        </div>
      </div>

      <div>
        <div>
          <h3>Mobile App Innovations</h3>
          <h4>Pioneering the latest in mobile technology, our innovations combine functionality with user-centric design, delivering cutting-edge applications that captivate audiences and provide a smooth mobile experience.</h4>
        </div>
        <img className= 'image4' src= {icon4} alt="pic4" />
      </div>

      
    </div>
  )
}

export default Tech