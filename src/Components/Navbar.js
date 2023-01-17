import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
//import CartHeader from './CartHeader';
import { BsFillCartCheckFill } from 'react-icons/bs';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src ={logo} alt="logo" />
        </div>

        <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="Menu">Menu</Link></li>
            <li><Link to="/Order">Place Order</Link></li>
            {/* <li><Link to="MenuList">Menu List</Link></li>  */}
            <li><Link to="Contact">Contact</Link></li>
            {/* <li><CartHeader /></li> */}
            <li><Link to="/Order"><BsFillCartCheckFill /></Link></li>
               
            
        </ul>
    </div>
  )
}

export default Navbar