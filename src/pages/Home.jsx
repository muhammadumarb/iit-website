import React from 'react'
import Hero from '../components/Home/Hero'
import AboutSection from '../components/Home/AboutSection'
import PopularCourses from '../components/Home/PopularCourses'
import SuccessStories from '../components/Home/SuccessStories'
const Home = () => {
  return (
    <>
        <Hero/>
        <AboutSection/>
        <PopularCourses/>
        <SuccessStories/>
    </>
  )
}

export default Home