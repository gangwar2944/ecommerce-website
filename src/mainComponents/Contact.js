import React from 'react'
import Header from '../components/Homepage/Alljs/Header';
import NewsLetter from '../components/Homepage/Alljs/NewsLetter';
import Footer from '../components/Homepage/Alljs/Footer';
import HeroHeader from '../components/aboutpage/jsx/HeroHeader';
import ContactLocation from '../components/contactpage/jsx/ContactLocation'
import ContactForm from '../components/contactpage/jsx/ContactForm';

const Contact = () => {
  return (
    <>
       <Header/>
       <HeroHeader/>
       <ContactLocation/>
       <ContactForm/>
       <NewsLetter/>
       <Footer/>
    </>
  )
}

export default Contact;