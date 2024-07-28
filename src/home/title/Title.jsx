import React from 'react'
import img1 from '../../assets/8.png';
import './title.css'

const Title = () => {
  return (
    <div className='title-container'>
      <div className='heading'>
        <div className='mkheading'>
          <h1>Masters Known</h1>
        </div>
        <div className='ssheading'>
          <h3>Software Solutions</h3>
        </div>
        <div className='techheading'>
          <h4>THE WORLD OF NEW TECHNOLOGY </h4>
        </div>
        <div className='para'>
          <p>
            In the ever-evolving world of new technology, innovation is
            the heartbeat of progress, seamlessly intertwining the
            realms of possibility and reshaping the way we experience and 
            interact with the world.
          </p>
         
        </div>
        
      </div>
       <div className='img1'>
        <img className = 'pic'src={img1} alt="image" />
      </div> 
    </div>
  )
}

export default Title