import React from 'react'
import './appointment.css'

const Appointment = () => {
  return (

    
    <div className='appointment-container'>
      <div className='appointment'>
        <div>
          <h3>WHAT ARE YOU WAITING FOR...</h3>
          <h1>Make an appointment</h1>
          <p>
            Don’t wait to build your dreams, partner with MasterKnown to launch your business today. Start your company on the foundation of innovation and expertise, where every idea unfolds into a transformative success story.
          </p>
        </div>
        <div>
          <h3>OUR LOCATION</h3>
          <h5>Madhapur, Hyderabad.</h5>
        </div>
        <div>
          <h3>CONTACT</h3>
          <h3>Phone: +91-9347772116</h3>
          <h3>Email: masterknownmk@gmail.com</h3>
        </div>
      </div>

      <div className='form-container'>
        <form action='form'>
          <label For='fname'>NAME:</label><br />
          <input type='text' id='fname' name='fname' defaultValue='' /><br /><br/>
          <label For='lname'>EMAIL:</label><br />
          <input type='text' id='email' name='email' defaultValue='' /><br /><br />
          <label For='lname'>PHONE NUMBER:</label><br />
          <input type='number' id='number' name='number' defaultValue='' /><br /><br />

          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default Appointment