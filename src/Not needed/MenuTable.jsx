import React from 'react';

const MenuTable = ({ data }) => {
 return (

    <table style={{width:'35%', margin:'3%', }}>
        <tr style={{paddingRight: '200px'}}>
            <th style={{paddingRight: '3%'}}>Name</th>
            <th style={{paddingRight: '3%'}}>Category</th>
            <th style={{paddingRight: '3%'}}>Price</th>
        </tr>
        {data.map ((item) => (
        <tr key = {item.id} >
            <td style={{paddingRight: '3%'}}>{item.name}</td>
            <td style={{paddingRight: '3%'}}>{item.category}</td>
            <td style={{paddingRight: '3%'}}>₦{item.price}</td>
        </tr>
        ))}
    </table>
    
  );
};


// import React from 'react';
// import './MenuTable.css';

// function MenuTable ({name, image, price}) {
//     return (
//         <div>
//         {/* <h1 className='menutitle'>Our Menu </h1> */}
//             <div className='menucontainer'>
//                 <div className='menucard'>
//                 <div className='imageM' style ={{backgroundImage: `URL(${image})` }}></div>
//                 <h3 className='nameM'>{name}</h3>
//                 <p className='priceM'>$ {price}</p>
//                 </div>
//             </div>
//         </div>
//     )

// }


export default MenuTable;
