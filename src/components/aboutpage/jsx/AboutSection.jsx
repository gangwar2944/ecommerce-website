import React from 'react'
import "../css/style.css"
const AboutSection = () => {
  return (
    <div>    
         <section class="abt-container">
            <div class="blog">
               <div class="blog-img abt-img">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlcnZpY2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
              </div>
            <div class="blog-dis abt-disc">
                  <h1>Who We Are?</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit officiis modi soluta sapiente? Aliquid cumque accusantium vero molestiae commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum iste iusto dolorem? Ullam aperiam beatae esse veniam sunt et?</p>
                  <h4>Skillset we have</h4>
                  <h5>HTML5, CSS3, JAVASCRIPT, REACT-JS, NODE-JS, MONGODB, EXPRESS-JS</h5>
                  <marquee behavior="" bgcolor="#ccc" direction="left">Affordable product for users</marquee>
            </div>
         </div>
 </section>
  </div>
  )
}

export default AboutSection;