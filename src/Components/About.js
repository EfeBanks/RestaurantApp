import React from 'react'
import './About.css';
import myimage from '../images/burger2.jpg';
import SocialMedia from './SocialMedia';
import Button from 'react-bootstrap/Button';


function About() {
  return (
    <div className='bgA'>
        <div className='topA'>
        <h1 className='headingtopA'> About Us</h1>

        </div>

        <div className='containerA'>
       <div class="leftA">
            <img src={myimage} alt = "about" />
        </div>
        <div class="rightA">

            <h1 className='headingA'> Welcome to Eb's kitchen </h1>

            <p class="firstA">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quia inventore ab mollitia tempore officia possimus adipisci temporibus voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quia inventore.</p>

            <p class="secondA">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quia inventore ab mollitia tempore officia possimus adipisci temporibus Necessitatibus aperiam quia inventore ab mollitia tempore officia possimus adipisci temporibusLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quia inventore ab mollitia tempore officia possimus adipisci temporibus voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quia inventore ab mollitia tempore officia possimus adipisci temporibus voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam quia inventore ab mollitia tempore officia possimus adipisci temporibus voluptate. </p>

           <h2 className='headingA' style={{marginTop: 5}}>Follow us </h2>
           <div><SocialMedia/></div>
           


        </div> 
        </div>
    </div>
   
  )
}

export default About;