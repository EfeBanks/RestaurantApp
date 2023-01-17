import React from 'react';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import OrderNew from './OrderNew';
import Menu from './Menu';
import Cart from './Cart';
import {Routes,Route} from 'react-router-dom';


const Routess = ({menuItems, cartItems, addToCart }) => {
  return (
    <div>
      <Routes>
          <Route path="/" exact element ={<Home />} />
          <Route path="/Contact" exact element ={<Contact />} />
          <Route path="/About" exact element ={<About />} />
          <Route path="/OrderNew" exact element ={<OrderNew menuItems={menuItems} addToCart={addToCart}  />} /> 
            {/* <Route path="/MenuList" exact element ={<MenuList />} /> */}
            <Route path="/Menu" exact element ={<Menu />} />
            <Route path="/Cart" exact element ={<Cart cartItems = {cartItems} addToCart={addToCart}  />} />   
        </Routes>
    </div>
  );
}

export default Routess;
