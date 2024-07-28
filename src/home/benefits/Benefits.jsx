import React from 'react'
import './benefits.css'

const Benefits = () => {
  return (
    <div className='benefits-container'>
      <div className='services'>
        <div >
          <h2>The best of our services</h2>
        </div>
        <div>
          <p className='p1'>
          MasterKnown, a dynamic startup, excels in crafting cutting-edge web and mobile applications, leveraging blockchain and advanced technologies. Our commitment to innovation ensures secure and transparent solutions. What sets us apart is our comprehensive service approach, covering diverse client needs, and our unwavering dedication to customer success, ensuring we stand by our clients every step of the way
          </p>
        </div>
      </div>

      <div className='points'>
        <ol className='renovation'>
          <li>Renovation and Restoration</li>
          <p>we reimagine and revive projects with unparalleled expertise, breathing new life into every endeavor through meticulous renovation and innovation</p>
        
          <li>Continuous Support</li>
          <p>we go beyond development, offering unwavering continuous support backed by expertise and seamless assistance for your journey’s success.</p>
       
       
          <li>Innovative Technology Integration</li>
          <p>MasterKnown’s commitment to advanced technologies reflects dedication to industry trends,</p>
        </ol>
      </div>
    </div>
  )
}

export default Benefits