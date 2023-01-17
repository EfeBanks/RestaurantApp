import React, {useState} from 'react';
import './Order.css';
import {Data} from "../Assests/MenuData2";
// import Cart from './Cart';


function Order(){
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
        {/* title section */}
       <h1 className='ordertitle'>Place your Order </h1>
       <div className='container'>
        <div className='row mt-5 mx-2'>
         {/* Search Box section */}
         {/* <div className='col-12 mb-5'> */}
            <div className='mb-3 col-4 mx-auto text-center'>
              <input type="text" className='form-control' placeholder='Search Menu' onChange={(event) => {
                setSearchTerm(event.target.value);
              }} />
            </div>
          {/* </div> */}
        </div> 
      </div>

      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>

           {/* cart section */}
          <div className='col-md-3 mt-4'>
             {/* <Cart/> */}
          </div>

            {/* card section */}
          <div className='col-md-9 mt-4'>
            <div className='row'>
            {
              Data
              // eslint-disable-next-line array-callback-return
              .filter((food) => {  
                  if(searchTerm === ""){
                  return food;
                }
                else if (food.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return food;
                }
                
                })
              .map((food) => {
                   return (
                    <>
                        
                      {/* card section */}
                    <div className='col-md-4 mt-4' >
                    <div className='card p-0 h-100 shadow' key={food.id}>
                    <img src={food.image} className='imgCard' alt=""  />
                    <div className='card-body'>
                    <h3 className='card-title'> {food.name}</h3>
                    <p className='card-text'>₦{food.price}</p>
                        <button className='btn btn-success orderbtnLink'> PLACE ORDER </button>
                    </div>
                    </div>
                    </div>

                    </>
                    );
                })
                }

              </div>
              </div>
              </div>   
        </div>
      </div>
    
       
    )
  }

export default Order;