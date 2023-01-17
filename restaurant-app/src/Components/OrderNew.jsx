import React, {useState} from 'react';
import './Order.css';
import data from "../Assests/MenuData";


function OrderNew() {
  const [searchTerm, setsearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  //const [page, setPage] = useState('')


  const addingToCart = (menu) => {
    console.log('we are in add to cart');
    setCart([...cart, menu]);
  }


  return (
    <div>
       <div><button className='btn btn-light cart'>View Cart ({cart.length})</button></div> 
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
        {data.menuItems
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
         
        })
        .map((menu) => {
            return (
              <div className="col-md-3 my-3" key={menu.id}>
              <div className="card shadow h-100 overflow-hidden p-0" >
                <img src={menu.image} alt={menu.name} className='card-img-top' style={{height:'70%'}} />
                <div className="card-body">
                  <h3 className='card-title'>{menu.name}</h3>
                  <p className='card-text'>{menu.price}</p>
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
