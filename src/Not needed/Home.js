import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className='bg'>

    <div className='tt'>
       <h1 className='title'> Welcome to EB's Kitchen</h1>
       <p className='text'>We leave a taste to remember</p>
        <Link to='/Menu2' className='orderbtnLink'>
       <div className='orderBtn'>
           ORDER NOW 
       </div>
       </Link>
       </div> 
       
   </div> 
       
   
  )
}

export default Home;