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
import './Menu.css';
//import data from "../Assests/MenuData";
import {Data} from "../Assests/MenuData2";
import {Link} from 'react-router-dom';


function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
   
  return (
    <div>
      {/* title section */}
   <h1 className='menutitle'> Our Menu </h1>
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
              Data
              // eslint-disable-next-line array-callback-return
              .filter((val) => {  
                  if(searchTerm === ""){
                  return val;
                }
                else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
                
                })
              .map((val) => {
                return (
                  <div className='col-md-3 mb-5' >
                  <div className='card p-0 overflow-hidden  h-100 shadow' key={val.id}>
                  <img src={val.image} className='card-img-top' alt='' style={{height:'70%'}}/>
                    <div className='card-body'>
                      <h3 className='card-title'> {val.name} </h3>
                      <p className='card-text'> ₦{val.price} </p>
                      <Link to='/Menu2' className='orderbtnLink'>
                        <button className='btn btn-success'> ORDER NOW </button>
                    </Link>
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