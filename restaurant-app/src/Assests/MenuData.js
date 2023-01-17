import pizza from '../Assests/pizza.jpg';
import noodles from '../Assests/noodles2.jpg';
import ofadaRice from '../Assests/nativeRice.jpg';
import burger from '../Assests/burger.jpg';
import stewRice from '../Assests/sauceRice.jpg';
import sauceRice from '../Assests/sauceRice2.jpg';
import smoothies from '../Assests/smoothies.jpg';
import cocktail from '../Assests/cocktail.jpg';
import wine from '../Assests/wine.jpg';


const data ={
    menuItems: [
        {
            id: 1,
            image: pizza,
            name: "Pepperoni Pizza",
            category: "foreign dish",
            price: 1899.99
        },
        
        {
            id: 2,
            name: "Cocktail",
            image: cocktail,
            category: "drinks",
            price: 900.99,
        },

        {
            id: 3,
            image: ofadaRice,
            name: "Ofada Rice",
            category: "local dish",
            price: 1499.99
        },

        {
            id: 4,
            image: burger,
            name: "Hamburger",
            category: "foreign dish",
            price: 800.50
        },
        
        {
            id: 5,
            name: "Smoothies",
            image: smoothies,
            category: "drinks",
            price: 700.00,
        },
        
        {
            id: 6,
            image: sauceRice,
            name: "Rice and Chicken sauce",
            category: "foreign dish",
            price: 499.99
        },
        
        {
            id: 7,
            image: stewRice,
            name: "Peppered Rice Sauce",
            category: "local dish",
            price: 2199.50
        },
        {
            id: 8,
            image: pizza,
            name: "Chicken-suya Pizza",
            category: "foreign dish",
            price: 2199.50
        },
       
        {
            id: 9,
            image: noodles,
            name: "Chinese Noodles",
            category: "foreign dish",
            price: 1999.99
        },
        
        {
            id: 10,
            image: burger,
            name: "Scotch Burger",
            category: "foreign dish",
            price: 1999.99
        },

        {
            id: 11,
            image: stewRice,
            name: "Rice and Pepper stew",
            category: "local dish",
            price: 1500.00
        },
        
        {
            id:'12',
            name: "Red Wine",
            image: wine,
            category: "drinks",
            price: 3500.00,
        },

        {
            id: 13,
            image: noodles,
            name: "French Noodles",
            category: "foreign dish",
            price: 1699.99
        }

    ]
}

export default data;

