import React from 'react'
import Title from './title/Title'
import Master from './master/Master'
import Benefits from './benefits/Benefits'
import Technologies from './technologies/Technologies'
import Appointment from './appointment/Appointment'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
    <Title/>
    <Master/>
    <Benefits/>
    <Technologies/>
     <Appointment/> 
     <Footer/>
    </div>
  )
}

export default Home