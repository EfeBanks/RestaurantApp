import React, {useState} from 'react';
import './Order.css';
//import data from "../Assests/MenuData";


function OrderNew({menuItems, addToCart}) {
  const [searchTerm, setsearchTerm] = useState('');


  return (
    <div>
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
        {menuItems
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
                <img src={menu.image} alt="" className='card-img-top' style={{height:'70%'}} />
                <div className="card-body">
                  <h3 className='card-title'>{menu.name}</h3>
                  <p className='card-text'>{menu.price}</p>
                  <button className='btn btn-success orderbtnLink' onClick={console.log("add to cart")} >Add to Cart</button>
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


// import React, {useState} from 'react';
// import './Order.css';
// // import data from "../Assests/MenuData";
// import {Data} from "../Assests/MenuData2";
// import Basket from './Basket';


// function OrderNew(props) {
//   const [searchTerm, setsearchTerm] = useState('');
//   const {products} = props;
//   const {cartItems} = props;
//   return (
//     <div>
//        <h1 className='menutitle'>Our Menu </h1>

//          {/* Search Box section */}
//       <div className="row">
//       <div className="col-12">
//         <div className="mx-auto col-4 text-center">
//           <input type='text' placeholder='Search  Menu' className='form-control' onChange = {(event) =>{
//             setsearchTerm(event.target.value);
//           }}/>
//         </div>

//       </div>
//       </div>
//        {/* <div className='container-fluid mx-2'> */}
//        <div className='container-fluid mx-2'>
//          <div className='row mt-5 mx-2'>


//             {/* card section  */}
//            <div className='col-md-9 mt-4' >
//             <div className='row'>

//               {Data
//           // eslint-disable-next-line array-callback-return
//           .filter((menu) => {
//             if(searchTerm === ""){
//               return menu;
//             }
//             // else if (menu.name.includes(searchTerm)) {
//             //   return menu;
//             // }
//             else if (menu.name.toLowerCase().includes(searchTerm.toLowerCase()
//             )) {
//               return menu;
//             }
            
//           })

//             //  map section 
//             .map((menu) => {
//               return (
//                 <div className="col-md-4 my-3" key={menu.id}>
//                 <div className="card shadow h-100 overflow-hidden p-0"  >
//                   <img src={menu.image} alt={menu.name} className='card-img-top' style={{height:'70%'}} />
//                   <div className="card-body">
//                     <h3 className='card-title'>{menu.name}</h3>
//                     <p className='card-text'>{menu.price}</p>
//                     <button className='btn btn-success orderbtnLink' >Add to Cart</button>
//                   </div>
//                 </div>
//               </div>
//               )
//             })}

  
                
//             </div>

//            </div>

//            {/* category section */}
//            <div className='col-md-3 mt-4'>

//              <Basket cartItems={cartItems}/>
            
//            </div>
            

//         </div>
//         </div> 
//     </div>
//   )
// }

// export default OrderNew;
