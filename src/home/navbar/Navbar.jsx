import React from 'react'
import { NavLink } from 'react-router-dom'
import img10 from '../../assets/logo.png'
import './navbar.css'
import { FiInstagram } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";



const Navbar = () => {
  return (
  <div className='navbar-container'>
     
   <img className='img10' src={img10} alt="image" />
    

    <div className='navnames'>

      <ul className='links'>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/service'><li>Service</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>

    </div>
    <div className='symbols'>
    <div className='socialmedia'>
    <FiInstagram />
    <RiFacebookCircleLine />
    <CiTwitter />
   
    </div>
    <div className='button'>
    <button >Book Now</button>
    </div>
    
    </div> 
  </div>
  )
}

export default Navbar