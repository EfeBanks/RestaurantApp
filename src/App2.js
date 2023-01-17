import React, {useState} from 'react';
import data from './Assests/MenuData';
import Navbar2 from './Components/Navbar2';
import Routess from './Components/Routess';
// import Contact from './Components/Contact';
// import About from './Components/About';
// import Home from './Components/Home';
// import Menu from './Components/Menu';
// import OrderNew2 from './Components/OrderNew2';
// import Cart from './Components/Cart';
 import Footer from './Components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App2 = () => {
  const {menuItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    }
    else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  // const removeFromCart = (menu) => {
  //   const ProductExist = cartItems.find(item => item.id === menu.id);
  //   if (ProductExist.quantity === 1){
  //     setCartItems(cartItems.filter(item => item.id !== menu.id));
  //   }
  //   else {
  //     setCartItems(
  //       cartItems.map(item => item.id === menu.id ? {
  //         ...ProductExist, quantity: ProductExist.quantity - 1}: item)
  //     );
  //   }
  // };


return (
  <div>
     <Router>
      <Navbar2 />

      <Routess menuItems ={menuItems } cartItems ={cartItems} addToCart={addToCart} />
            
     <Footer />
     </Router>
  </div>
);
}

export default App2;




// function App2() {
//   const { products } = Data;
//   const [ cartItems, setCartItems] = useState([]);

// return (
//   <div>
//      <Router>
//       <Navbar2 />

//       <Routes products ={products}>
//         <Route path="/" exact element ={<Home />} />
//         <Route path="/Contact" exact element ={<Contact />} />
//         <Route path="/About" exact element ={<About />} />
//         <Route path="/OrderNew2" exact element ={<OrderNew2 products ={products} />} /> 
//         <Route path="/Menu" exact element ={<Menu />} />
//         <Route path="/Cart" exact element ={<Cart cartItems ={cartItems}/>} />   
             
//       </Routes>
//      <Footer />
//      </Router>
//   </div>
// );
// }

// export default App2;

// const App2 = () => {
//   const [show, setShow] = useState(true);
//   const [cart, setCart] = useState([]);
//   //const [msg, setMsg] = useState(false);

//   const handleClick = (menu) => {
//     // console.log(menu);
//     const isPresent = false;
//     cart.forEach((product) => {
//       if (menu.id === product.id)
//       isPresent = true;
//     })
//     if (isPresent)
//     return;
//     setCart([...cart, menu]);
//   }

  
// return (
//   <div>
//      <Router>
//       <Navbar2 size={cart.length} setShow={setShow} />
      
//         {/* if(show){
//           <OrderNew handleClick={handleClick}
//         }
//         else{
//           <Cart cart= {cart} setCart ={setCart} />
//         } */}
          
      

//       <Routes handleClick={handleClick} cart= {cart} setCart ={setCart} >
//       {/* <Routes> */}
//         <Route path="/" exact element ={<Home />} />
//         <Route path="/Contact" exact element ={<Contact />} />
//         <Route path="/About" exact element ={<About />} />
//         <Route path="/Menu" exact element ={<Menu />} />
//         { show ? <Route path="/OrderNew" exact element =
//         {<OrderNew handleClick={handleClick}  />} /> : 
//        <Route path = "/Cart" exact element ={<Cart cart= {cart} setCart ={setCart} />} /> 
//           } 
//         {/* <Route path="/Cart" exact element ={<Cart cart= {cart} setCart ={setCart} />} />    */}
             
//       </Routes>
//      <Footer />
//      </Router>
//   </div>
// );
// }

// export default App2;

