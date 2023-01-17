import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';
import { BsFillCartCheckFill } from 'react-icons/bs';



const Header = () => {
  return (
    // <div className='navbar'>
    //     <div className='logo'>
    //       <Link to='/' >
    //         <img src ={logo} alt="logo" />
    //       </Link>
    //     </div>

    //     <ul className='nav-links'>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/About">About</Link></li>
    //         <li><Link to="Menu">Menu</Link></li>
    //         <li><Link to="/Order">Place Order</Link></li>
    //         <li><Link to="Contact">Contact</Link></li>

    //       </ul>
    //       <ul className='cart'>
    //         <li><Link to="/Cart" className='cart-link'>
    //           <BsFillCartCheckFill className='h3' />
    //         </Link></li>
    //       </ul>    
            
        
    // </div>

    <Navbar bg="dark" variant="dark" expand="md" sticky='top'>
    {/* <Navbar expand="md"> */}
    <Container>
      <Navbar.Brand href="/" className='logo'>
        <img src ={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Menu">Menu</Nav.Link>
          <Nav.Link href="/OrderNew">Place Order</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
          <Nav.Link href="/Cart"  className='cart-link'>
            <BsFillCartCheckFill className='h3' /> 
            </Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
