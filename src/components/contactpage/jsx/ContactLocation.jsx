import React from 'react';
import "../css/style.css";
const ContactLocation = () => {
  return (
    <div>
        <div className="contact-container">
             <div className="contact-detail">
                 <span>GET IN TOUCH</span>
                 <h1>visit one of our agency location or contact us today</h1>
                 <h4>Head Office</h4>
                 <p>city:- bareilly uttar pradesh</p>
                 <p>Phone:- 8840216454</p>
                 <p>Email:- vishalgangwar094@gmail.com</p>
                 <p>Open:- monday to saturday 9:00AM to 5:00PM</p>
             </div>
             <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112333.61782257307!2d79.3518988364994!3d28.37621194087957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007334d02998d%3A0x5b9d44cf31ee87f!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1650127957815!5m2!1sen!2sin" style={{width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
             </div>
            </div>
    </div>
  )
}

export default ContactLocation;