import React, {useState} from 'react';
import './Cart.css';


export default function Cart() {
const [cartItems, setCartItems] = useState([]);

var newcartitems = JSON.parse(localStorage.getItem("CartItems"));
let filteredProduct = newcartitems.filter((x, index) => index === newcartitems.findIndex(z => z.id === x.id) )

//cartItems = newcartitems;
let selectedCartItems = filteredProduct;
//console.log(cartItems)


//function to add to cart
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

//function to remove from cart
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

//function to increase the total price in cart
const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price, 0 )
 
//function to clear all items in cart


return (
    <div>
      <h4 className='carttitle'> Cart Items </h4>
    <div className='cart-items'>
        
          {selectedCartItems.length === 0 && (<div className='cart-items-empty'>No items in Cart</div>)}
          {selectedCartItems.length > 0 && <p className='cart-items-header'> Total Cart Items: {selectedCartItems.length} </p>}
      

           <div>
          {selectedCartItems.map((item) => { 
            return(      
          // eslint-disable-next-line array-callback-return
            <div key={item.id} className="cart-items-list">
              <img src={item.image} alt={item.name} className='cart-items-image'/>
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-item-add' onClick={() => addToCart(item)}> + </button>
                <button className='cart-item-remove' onClick={() => removeFromCart(item)}> - </button>
              </div>
              <div className='cart-items-price'>{item.quantity} x ₦{item.price}</div>
             
          </div>
          );
            
          })}
      </div> 

      <div className='cart-items-total-price-name'> Total Price
          <div className='cart-items-total-price'> ₦{totalPrice}</div>
       </div>

      </div>
    </div>

    
  );
}

// import React from 'react';
// import './Cart.css';


// export default function Cart({cart}) {
//   //const [price, setPrice] = useState(0);
//   return (
//     <div className='cart-items'>
//       <h4 className='carttitle'> Cart Items </h4>
//       <article>
//         {
//           // eslint-disable-next-line array-callback-return
//           cart.map((menu) =>(
//             <div className="card shadow h-100 overflow-hidden p-0" key={menu.id} >
//                 <img src={menu.image} alt={menu.name} className='card-img-top' style={{height:'70%'}} />
//                 <div className="card-body">
//                   <h3 className='card-title'>{menu.name}</h3>
                  
//                   <div>
//                     <button className='btn btn-success orderbtnLink' > + </button>
//                     <button className='btn btn-success orderbtnLink' > - </button>
//                   </div>

//                   <div>
//                     <p className='card-text'>{menu.price}</p>
//                     <button className='btn btn-danger'>Remove</button>

//                   </div>
//                 </div>
//               </div>


//           ))
//         }

//         <div>
//           <span>Total Price of your Cart </span>
//           {/* <span>$ {price} </span> */}
//         </div>
//       </article>

//     </div>
//   );
//   }
