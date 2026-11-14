import React from 'react'
import Navbar from './components/Layout/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admission from './pages/Admissions';
import VerifyCertificate from './pages/VerifiyCertificate';
import Stories from './pages/Stories';
import Events from './pages/Events';
import Donate from './pages/Donate';
import LMS from './pages/LMS';
import Footer from './components/Layout/Footer/Footer';
import Poppap from './components/Layout/Footer/Poppap/Poppap';
import SlideAction from './components/Layout/SideAction/SideAction';
import WhatsAppButton from './components/Layout/WhatsAppButton/WhatsAppButton.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/lms" element={<LMS/>} />
      </Routes>
      <Poppap/>
      <WhatsAppButton/>
      <SlideAction/>
      <Footer/>
    </div>
  )
}

export default App