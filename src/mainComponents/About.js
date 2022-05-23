import React from 'react'
import FeatureSection from '../components/Homepage/Alljs/FeatureSection';
import Header from '../components/Homepage/Alljs/Header';
// import NewsLetter from '../components/Homepage/Alljs/NewsLetter';
import NewsLetter from '../components/Homepage/Alljs/NewsLetter';
import Footer from '../components/Homepage/Alljs/Footer';
import HeroHeader from '../components/aboutpage/jsx/HeroHeader';
import AboutSection from '../components/aboutpage/jsx/AboutSection';

const About = () => {
  return (
    <>
       <Header/>
       <HeroHeader/>
       <AboutSection/>
       <FeatureSection/>
       <NewsLetter/>
       <Footer/>
    </>
  )
}

export default About;