import React from 'react'
import Navbar from './components/Layout/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admission from './pages/Admissions';
import VerifyCertificate from './pages/VerifiyCrtificate';
import Stories from './pages/Stories';
import Events from './pages/Events';
import Donate from './pages/Donate';
import LMS from './pages/LMS';

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
    </div>
  )
}

export default App