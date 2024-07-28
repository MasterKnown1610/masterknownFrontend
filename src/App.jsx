import React from 'react';
import Navbar from './home/navbar/Navbar';
import Home from './home/home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about/about.jsx';
import Contact from './contact/Contact';
import Servicess from './servicess/servicess.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='comp-names'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Servicess />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
