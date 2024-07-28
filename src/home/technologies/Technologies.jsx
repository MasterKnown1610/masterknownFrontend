import React from 'react'
import './technologies.css'
import img2 from '../../assets/python.png'
import img3 from '../../assets/tensorflow.png'
import img4 from '../../assets/reactjs.png'
import img5 from '../../assets/javascript.png'
import img6 from '../../assets/Dart.png'
import img7 from '../../assets/flutter.png'
import img8 from '../../assets/logo.png'


const Technologies = () => {
  return (
    <div className='tech-container'>
      <div className='tech-headings'>
        <div className='tech'>
          <h5>TECHNOLOGIES</h5>
        </div>
        <div className='mktech'>
          <h1>Master Known's
          Cutting-Edge Technologies</h1>
        </div>
        <div className='images'>
          <img className='pic2' src={img2} alt="image" />
          <img className='pic3' src={img3} alt="image" />
          <img className='pic4' src={img4} alt="image" />
          <img className='pic5' src={img5} alt="image" />
          <img className='pic6' src={img6} alt="image" />
          <img className='pic7' src={img7} alt="image" />
        </div>
      </div>
      <div className='bottomheading'>
        <div className='shaping'>
        Shaping Tomorrow's Possibilities Today. Unleashing Innovation, One Solution at a Time. Where Expertise and Vision Converge for Unmatched Excellence.
        </div>
        <img className='pic8'src={img8} alt="image" />
        <div className='mk'>
          <h4>Masters Known</h4>
        </div>
      </div>
    </div>
  )
}

export default Technologies