import React, {useState} from 'react';
import './Menu.css';
import Data from '../../MenuData';
//import Rice from '../../images/whiteRice.jpg'


function Menu() {
  const [searchTerm, setsearchTerm] = useState('');


  return (
    <div>
      <h1 className='menuTitle'>Place your order</h1>

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
        {Data.menuItems
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
              <div className="col-md-3 my-3">
              <div className="card shadow h-100 overflow-hidden p-0" key={menu.id}>
                <img src={menu.image} alt="" />
                <div className="card-body">
                  <h3>{menu.name}</h3>
                  <p>{menu.price}</p>
                  <button className='btn btn-success'>Add to Cart</button>
                </div>
              </div>
            </div>
            )
          })}
       

        {/* <div className="col-md-3 my-3">
          <div className="card shadow h-100 overflow-hidden p-0">
            <img src={Rice} alt="" />
            <div className="card-body">
              <h3>Fried rice</h3>
              <p>#1500.00</p>
              <button className='btn btn-success'>Add to Cart</button>
            </div>
          </div>
        </div> */}

        

      </div>
    </div>
  );
}

export default Menu;
