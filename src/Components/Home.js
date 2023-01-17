import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div className='bg'>

    <div className='tt'>
       <h1 className='title'> Welcome to EB's Kitchen</h1>
      <p className='text'>We offer the following:</p>
       <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Catering Services</div>
              <div className="i-title-item">Event Planning</div>
              <div className="i-title-item">Training</div>
              <div className="i-title-item">Outdoor Services</div>
             
            </div>
          </div>
        <Link to='/OrderNew' className='orderbtnLink'>
       <div className='orderBtn'>
           VIEW MENU 
       </div>

       </Link>
       </div> 
       
   </div> 
       
   
  )
}

export default Home;