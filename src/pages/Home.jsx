import React from 'react'
import AboutSection from '../components/Home/AboutSection'
import PopularCourses from '../components/Home/PopularCourses'
import SuccessStories from '../components/Home/SuccessStories'
import Slider from '../components/Home/Slider'
import Stats from '../components/Home/Stats'
import ContactSection from '../components/Home/ContactSection'
const Home = () => {
  return (
    <div className='bg-[]'>
        <Slider/>
        <AboutSection/>
        <PopularCourses/>
        <Stats/>
        <SuccessStories/>
        <ContactSection/>
        
    </div>
  )
}

export default Home