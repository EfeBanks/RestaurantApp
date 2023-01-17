import React from 'react';
import contactImg from '../Assests/pizza.jpg';
import './Contact.css';
//import Button from 'react-bootstrap/Button';


function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'>
          <img src={contactImg} alt="pizza" />
        </div> 

      <div className='rightSide'>
        <h1>Contact Us</h1>
        
        <form id="contact-form" method="POST">
          <label htmlFor='name'> Full Name</label>
          <input name= "name" type="text" placeholder="Enter your full name..." />

          <label htmlFor='email'> Email</label>
          <input name= "email" type="email" placeholder="Enter your email..." required/>

          <label htmlFor='message'> Message</label>
          <textarea name="message" rows="6" placeholder='Enter your message...'></textarea>
          
          <button type="submit">Send Message</button>
        </form>

   {/* Testing React Bootstrap button      */}

  {/*Examples of variant="primary, secondary, link, warning, danger, success, light, dark">Primary</Button>{' '}
   <Button variant="secondary">Secondary</Button>{' '}
   */}

      </div>
      
    </div>
  )
}

export default Contact