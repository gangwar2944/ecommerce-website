import React from 'react'
import {Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <>
         <div className="container d-flex justify-content-center align-item-center">
         <div className="notFound d-flex justify-content-center align-item-center flex-column">
           <figure className='img-404'>
             <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?t=st=1653150504~exp=1653151104~hmac=a12f819588df22b07b426620b067226c128bbbe7e38762d2388e186fff506913&w=740" alt="" />
           </figure>
           <h1>OOPs! 404 error page not found</h1>
           <Link to="/"><button className='btn-404'>BACK TO HOME</button></Link>
         </div>
       </div>
    </>
  )
}

export default NoPage;