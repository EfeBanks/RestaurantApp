import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {Data} from "../Assests/MenuData2";
import {useState} from 'react';


const MenuCategory = () =>{
    const [menu, setMenu] = useState(Data);
    const filterResult=(categoryItem) => {
      const result=Data.filter((currentData)=>{
        return currentData.category===categoryItem;
      });
      setMenu(result);
    }

  return (
    <div>
       <h1 className='menutitle'>Our Menu </h1>
       {/* <div className='container-fluid mx-2'> */}
       <div className='container-fluid mx-2' style={{position:'relative'}}>
         <div className='row mt-5 mx-2'>

           {/* category section */}
           <div className='col-md-3 mt-4' style={{position:'fixed', left:0, top:'40%', zIndex: 5}}>
           {/* <div className='col-md-3 mt-4'> */}
             <h4 className='categoryM4'> SELECT CATEGORY</h4>
             <button className='btn btn-success w-100 mb-4 p-4' onClick={() => filterResult('local dish')}>Local dish</button> 
             <button className='btn btn-success w-100 mb-4 p-4' onClick={() => filterResult ('foreign dish')}>Foreign dish </button>
             <button className='btn btn-success w-100 mb-4 p-4' onClick={() => filterResult('drinks')}>Drinks</button>
             <button className='btn btn-success w-100 mb-4 p-4' onClick={() => setMenu(Data)}>All</button>
           </div>

            {/* card section */}
           <div className='col-md-9 mt-4' style={{position:'absolute', right:0}}>
            <div className='row'>

            {/* map section */}
            { menu.map((values) => {
              // const {id,image,name,category,price} = values //This is known as destructuring 
                 return (
                    <>
                        

                    <div className='col-md-4 mb-4' >
                    <div className='card p-0 h-100 shadow'>
                    <img src={values.image} className='imgCard' alt=""  />
                    <div className='card-body'>
                    <h3 className='card-title'> {values.name}</h3>
                    <p className='card-text'>${values.price}</p>
                    <Link to='/OrderNew' className='orderbtnLink'>
                        <button className='btn btn-success'> ORDER NOW </button>
                    </Link>
                    </div>
                    </div>
                    </div>

                    </>
                    );
                })}

                
            </div>

           </div>
        </div>
        </div> 
    </div>
  )
}

export default MenuCategory;