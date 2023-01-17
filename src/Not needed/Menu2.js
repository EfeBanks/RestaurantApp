import React from 'react';
import './Menu2.css';
import img1 from '../Assests/sauceRice.jpg';
import img2 from '../Assests/pizza.jpg';
import img3 from '../Assests/sauceRice2.jpg';
import img4 from '../Assests/burger.jpg';
import img5 from '../Assests/nativeRice.jpg';
import img6 from '../Assests/noodles2.jpg';
import {Link} from 'react-router-dom';

function Menu2 () {
  return (
    <div>
    <h1 className='menutitle'>Our Menu </h1>
    <div className='instructorsContainer' >
        <div className='instructor'>
        <Link to='../Assests/sauceRice.jpg'><img src={img1} className='image' alt="food" /></Link>
            <h3 className='name'>Rice and Pepper stew</h3>
            <p className='price'>$ 4.50</p>
        </div>
        <div className='instructor'>
        <Link to='../Assests/pizza.jpg'><img src={img2} className='image' alt="food" /></Link>
            <h3 className='name'>Pepperoni Pizza</h3>
            <p className='price'>$ 3.99</p>
        </div>
        <div className='instructor'>
        <Link to='../Assests/sauceRice2.jpg'><img src={img3} className='image' alt="food" /></Link>
            <h3 className='name'>Ofada Rice </h3>
            <p className='price'>$ 6.50</p>
        </div>
        <div className='instructor'>
        <Link to='../Assests/burger.jpg'><img src={img4} className='image' alt="food" /></Link>
            <h3 className='name'>Scotch burger</h3>
            <p className='price'>$ 3.50</p>
        </div>

        <div className='instructor'>
        <Link to='../Assests/nativeRice.jpg'><img src={img5} className='image' alt="food" /></Link>
            <h3 className='name'>Rice and sauce</h3>
            <p className='price'>$ 4.50</p>
        </div>

        <div className='instructor'>
        <Link to='../Assests/noodles2.jpg'><img src={img6} className='image' alt="food" /></Link>
            <h3 className='name'>French Noodles</h3>
            <p className='price'>$ 8.99</p>
        </div>
    </div>
    </div>
  )
}

export default Menu2;