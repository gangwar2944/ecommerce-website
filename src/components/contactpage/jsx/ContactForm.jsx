import React from 'react'
import "../css/style.css"
const ContactForm = () => {
  return (
    <div>
        <div className="contact-cont">
        <div className="form-container ">
               <div className="form-detail">
               <span>LEAVE A MESSAGE</span>
                 <h1>We Love To Hear From You</h1>
                   <form id="contact-form" method="POST">
                         <div className="form-group">
                        <label htmlFor="name">Name</label>
                     <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                     <input type="email" className="form-control" aria-describedby="emailHelp" />
                   </div>
                     <div className="form-group">
                    <label htmlFor="message">Message</label>
                   <textarea className="form-control" rows="5"></textarea>
                   </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
              </div>
        </div>
        <div class="team">
                 <div class="img-info">
                     <img src="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?s=612x612" alt=""/>
                     <div class="team-info">
                      <h2>sonu yadav</h2>
                      <p>Seniour Software Developer</p>
                      <p>Phone :- 7317245780</p>
                      <p>Email:- sonuyadav1754@gmail.com</p>
                     </div>
                </div>
                 <div class="img-info">
                     <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?s=612x612" alt=""/>
                     <div class="team-info">
                      <h2>vishal gangwar</h2>
                      <p>Senior Software Developer</p>
                      <p>Phone :- 8840216454</p>
                      <p>Email:- gangwanji5412@gmail.com</p>
                     </div>
                </div>
                 <div class="img-info">
                     <img src="https://media.istockphoto.com/photos/charming-female-on-yellow-backdrop-picture-id936419870?k=20&m=936419870&s=612x612&w=0&h=X9gdSjwNCUxRt_1SkZAyxCWDCIggkxvokBgtZCljBS4=" alt=""/>
                     <div class="team-info">
                      <h2>pooja yadav yadav</h2>
                      <p>junior Software Developer</p>
                      <p>Phone :- 658457968</p>
                      <p>Email:- poojayadav45@gmail.com </p>
                     </div>
                </div>
                  
             </div>
        </div>
    </div>
  )
}

export default ContactForm;