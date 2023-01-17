import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';


function SocialMedia() {
  return (
    <div className='socials' style={{color:'white', marginRight:'50px', fontSize:25}}>
        {/* <Link to={{ pathname: 'https://facebook.com' }} target="_blank" >
        <BsFacebook /> </Link>  */}

        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{color:'inherit'}}>
        <BsFacebook /></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{color:'inherit'}}>
        <BsInstagram /></a> &nbsp;&nbsp;&nbsp;&nbsp;
        <BsTwitter/> &nbsp;&nbsp;&nbsp;&nbsp; 
        <BsYoutube/> 
    </div>
  )
}

export default SocialMedia