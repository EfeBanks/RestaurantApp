import React from 'react';
import './Cart.css';
 

export default function Cart({cartItems, addToCart, removeFromCart}) {
  var ncartItems = JSON.parse(localStorage.getItem("CartItems"));
  
  let pp = ncartItems.filter( (ele, ind) => ind === ncartItems.findIndex( elem => elem.id === ele.id))

console.log(pp)
  cartItems = pp;
  return (
    <div className='cart-items'>
      <h4 className='carttitle'> Cart Items </h4>
     
     
          {cartItems.length === 0 && (<div>Cart is Empty</div>)}
          {cartItems.length > 0 && <p>Cart: {cartItems.length}</p>}
      
      {/* <div>
          {cartItems.map((item) => {
            <div key={item.id} className="cart-items-list">
              <img src={item.image} alt={item.name} className='cart-items-image'/>
              <div className='cart-items-name'>{item.name}</div>
              <div className='cart-items-function'>
                <button className='cart-item-add' onClick={() => addtocart(item)}> + </button>
                <button className='cart-item-remove' onClick={() => removeFromCart(item)}> - </button>
              </div>
              <div className='cart-items-price'>{item.quantity} x ₦{item.price}</div>
             
            </div>
          })}
      </div> */}

          <div>
          {cartItems.map((item) => { 
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
    </div>

    
  );
}
