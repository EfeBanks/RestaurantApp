import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';
import SocialMedia from './SocialMedia';




function Footer() {
  return (
    <div className='footerbg'>
      <div className='ff'>
        <div className='footerlogo'>
            <img src ={logo} alt="logo" />
        </div>
        <div>
         <SocialMedia /> 
        </div>

      </div>
        <hr />
      <div className='footertext'>
        Copyright &copy; 2022 Eb's Kitchen
        </div>
    </div>
  )
}

export default Footer