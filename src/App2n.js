import React,{useState} from 'react';
import data from './Assests/MenuData';
import Navbar2 from './Components/Navbar2';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Menu from './Components/Menu';
import OrderNew from './Components/OrderNew';
import Cart from './Components/Cart';
//import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// const App2 = () => {
//     const {menuItems} = data;
//     const [cartItems, setCartItems] = useState([]);

//     const addtocart = (product) =>{
//       const ProductExist = cartItems.find(item => item.id === product.id);
//       if (ProductExist){
//         setCartItems(cartItems.map(item => item.id === product.id ?
//         {...ProductExist, quantity: ProductExist.quantity + 1}: item)
//         );
//       }
//       else {
//         setCartItems([...cartItems, {...product, quantity: 1}]);
//       }
//     };

//     const removeFromCart = (product) => {
//       const ProductExist = cartItems.find(item => item.id === product.id);
//       if (ProductExist.quantity === 1){
//         setCartItems(cartItems.filter(item => item.id !== product.id));
//       }
//       else {
//         setCartItems(
//           cartItems.map(item => item.id === product.id ? {
//             ...ProductExist, quantity: ProductExist.quantity - 1}: item)
//         );
//       }
//     };

//   return (
//     <div>
//        <Router>
//         <Navbar2 />

//         <Routes menuItems={menuItems} cartItems = {cartItems} addtocart={addtocart} removeFromCart = {removeFromCart}>
//           <Route path="/" exact element ={<Home />} />
//           <Route path="/Contact" exact element ={<Contact />} />
//           <Route path="/About" exact element ={<About />} />
//           <Route path="/OrderNew" exact element ={<OrderNew menuItems={menuItems} addtocart={addtocart} removeFromCart = {removeFromCart} />} />
//           {/* <Route path="/MenuList" exact element ={<MenuList />} /> */}
//           <Route path="/Menu" exact element ={<Menu />} />
//           <Route path="/Cart" exact element ={<Cart cartItems = {cartItems} addtocart={addtocart} removeFromCart = {removeFromCart} />} />         
//         </Routes>
//        {/* <Footer /> */}
//        </Router>
//     </div>
//   );
// }

const App2 = () => {
  const {menuItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) =>{
    const ProductExist = cartItems.find(item => item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map(item => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    }
    else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (menu) => {
    const ProductExist = cartItems.find(item => item.id === menu.id);
    if (ProductExist.quantity === 1){
      setCartItems(cartItems.filter(item => item.id !== menu.id));
    }
    else {
      setCartItems(
        cartItems.map(item => item.id === menu.id ? {
          ...ProductExist, quantity: ProductExist.quantity - 1}: item)
      );
    }
  };

return (
  <div>
     <Router>
      <Navbar2 />

      <Routes menuItems={menuItems} cartItems = {cartItems} addToCart={addToCart} removeFromCart = {removeFromCart}>
      {/* <Routes> */}
        <Route path="/" exact element ={<Home />} />
        <Route path="/Contact" exact element ={<Contact />} />
        <Route path="/About" exact element ={<About />} />
        <Route path="/OrderNew" exact element ={<OrderNew menuItems={menuItems} addToCart={addToCart} removeFromCart = {removeFromCart} />} /> 
        {/* <Route path="/MenuList" exact element ={<MenuList />} /> */}
        <Route path="/Menu" exact element ={<Menu />} />
        <Route path="/Cart" exact element ={<Cart cartItems = {cartItems} addToCart={addToCart} removeFromCart = {removeFromCart} />} />   
             
      </Routes>
     {/* <Footer /> */}
     </Router>
  </div>
);
}

export default App2;

