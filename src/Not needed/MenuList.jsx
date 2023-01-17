import {useState} from 'react'
import './MenuList.css';
import {Data} from '../Assests/MenuData2';
import MenuTable from './MenuTable';





function MenuList() {
    
    const [query, setQuery] = useState("");

    //const keys = ["name", "category", "price"]
    
    const search = (data) => {
       return data.filter ((item) => item.name.toLowerCase().includes(query));
      
    };

    // console.log (MenuList.filter(menulist=>menulist.name.toLowerCase().includes("rice")));
    // console.log (MenuList.filter(menulist=>menulist.name.includes("rice")));    
    // console.log (query);
  return (
    <div className='containerM'>
        <input type="text" placeholder='Search...' className='searchbox' onChange={(e) => setQuery(e.target.value)}/>

        {/* <ul className='list'>
            {MenuList.map((menulist) => (
                 <li key={menulist.id} className='list-item'>{menulist.name}</li>
            ))}       
        </ul> */}

        {/* <ul className='list'>
            {MenuList.filter((menulist) => menulist.name.toLowerCase().includes(query)).map((menulist) => (
                 <li key={menulist.id} className='list-item'>{menulist.name}</li>
            ))}       
        </ul> */}

        {/* We would use a table instead of a list to display the MenuList */}
        <MenuTable data={search (Data)} />
    </div>
  )
}

export default MenuList;