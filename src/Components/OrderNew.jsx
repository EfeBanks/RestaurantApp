import React, {useState} from 'react';
import './Order.css';
// import data from "../Assests/MenuData";
import {Data} from "../Assests/MenuData2";



function OrderNew() {
  const [searchTerm, setsearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  //const [page, setPage] = useState('menu');


  const addingToCart = (menu) => {
    console.log('we are in add to cart');
    setCart([...cart, menu]);
    localStorage.setItem("CartItems", JSON.stringify(cart));
    console.log(cart);
  }

  // const newcartitems = localStorage.getItem("CartItems").length;
  //const filteredProduct = newcartitems.filter((x, index) => index === newcartitems.findIndex(z => z.id === x.id) )


  return (
    <div>
       <div className='cartMsg'> Cart items: ({cart.length})</div> 
       {/* <div className='cartMsg'>Cart items: ({localStorage.getItem("CartItems").length})</div>  */}
       {/* <div className='cartMsg'> Cart items: ({newcartitems}) </div>  */}
      <h1 className='ordertitle'>Place your order</h1>

      {/* Search Box section */}
      <div className="row">
        <div className="col-12">
          <div className="mx-auto col-4 text-center">
            <input type='text' placeholder='Search  Menu' className='form-control' onChange = {(event) =>{
              setsearchTerm(event.target.value);
            }}/>
          </div>

        </div>
      </div>

      {/* Menu section */}
      <div className="row justify-content-center">
        {/* {data.menuItems */}
        {Data
        // eslint-disable-next-line array-callback-return
        .filter((menu) => {
          if(searchTerm === ""){
            return menu;
          }
          // else if (menu.name.includes(searchTerm)) {
          //   return menu;
          // }
          else if (menu.name.toLowerCase().includes(searchTerm.toLowerCase()
          )) {
            return menu;
          }
          // else {
          //     return <p>Not found</p>;
          //  }
         
        })
        .map((menu) => {
            return (
              <div className="col-md-3 my-3" key={menu.id}>
              <div className="card shadow h-100 overflow-hidden p-0"  >
                <img src={menu.image} alt={menu.name} className='card-img-top' style={{height:'70%'}} />
                <div className="card-body">
                  <h3 className='card-title'>{menu.name}</h3>
                  <p className='card-text'> ₦{menu.price}</p>
                  <button className='btn btn-success orderbtnLink' onClick={() => addingToCart(menu)} >Add to Cart</button>
                </div>
              </div>
            </div>
            )
          })}

      </div>
    </div>
  );
}

export default OrderNew;
