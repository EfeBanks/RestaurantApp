// import React from 'react';
// import './Menu.css';
// //import data from "../Assests/MenuData";
// import {Data} from "../Assests/MenuData2";
// import {useState} from 'react';

// const Menu = () => {
//   const [filter, setFilter] = useState('');
//   const searchText = (event) => {
//   setFilter(event.target.value);
//    }
//    let dataSearch = Data.filter(item => {
//    //let dataSearch = data.cardData.filter(item => {
//      return Object.keys(item).some(key =>
//       item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//       )
//    });

//   return (
//     <section className='container py-4'>

//       {/* title section */}
//        <h1 className='menutitle'>Our Menu </h1>
//       <div className='row justify-content-center'>

//         {/* Search Box section */}
//         <div className='col-12 mb-5'>
//           <div className='mb-3 col-4 mx-auto text-center'>
//             <input type="text" className='form-control' placeholder='Search Menu' value ={filter} onChange={searchText.bind(this)}/>
            
 
//           </div>
   
//         </div>

//         {/* card section */}
//         {dataSearch.map ((item,index) => {
//         // {data.cardData.map ((item,index) => {
//           return (
//             <div className='col-8 col-md-6 col-lg-3 mb-5'>
//             <div className='card p-0 overflow-hidden  h-100 shadow'>
//               <img src={item.image} className='card-img-top' alt='' style={{height:'70%'}}/>
//                 <div className='card-body'>
//                   <h2 className='card-title'> {item.name} </h2>
//                     <p className='card-text'> ₦{item.price} </p>
//                 </div>
//             </div>
//           </div>

//           )
//         })}
        
//       </div>  
//     </section>
//   )
// }

// export default Menu


import React, {useState} from 'react';
import './Order.css';
//import {Data} from "../Assests/MenuData2";



// function Menu({menuItems, product, addtocart}) {
  function Menu({menuItems, addtocart}) {
  const [searchTerm, setSearchTerm] = useState("");
 
  
  return (
    <div>
      {/* title section */}
   <h1 className='ordertitle'> Place your Order </h1>
      <div className='container py-4'>
        <div className='row '>
         {/* Search Box section */}
         <div className='col-12 mb-5'>
          <div className='mb-3 col-4 mx-auto text-center'>
            <input type="text" className='form-control' placeholder='Search Menu' onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
          </div>
          </div>
          </div>
            
            {/* card section */}
          <div className='row justify-content-center'>
            {
              menuItems
              // eslint-disable-next-line array-callback-return
              .filter((menu) => {  
                  if(searchTerm === ""){
                  return menu;
                }
                else if (menu.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return menu;
                }
                
                })
              .map((menu) => {
                return (
                  <div className='col-md-3 mb-5' >
                  <div className='card p-0 overflow-hidden  h-100 shadow' key={menu.id} addtocart={addtocart}>
                  <img src={menu.image} className='card-img-top' alt='' style={{height:'70%'}}/>
                    <div className='card-body'>
                      <h3 className='card-title'> {menu.name} </h3>
                      <p className='card-text'> ₦{menu.price} </p>
                        {/* <button className='btn btn-success orderbtnLink' onClick={() => addtocart(product)}> ADD TO CART </button> */}
                        <button className='btn btn-success orderbtnLink' onClick={() => addtocart(menu)}> ADD TO CART </button>
                    </div>
                </div>
                </div>
                )
              })
              
            }
          
       
        </div> 
    </div>
    </div>  
  )
}

export default Menu;