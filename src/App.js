import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
//import Menu from './Components/Menu';
import Order from './Components/Order';
//import Menu2 from './Components/Menu2';
import Menu from './Components/Order';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Router>
      <Navbar />

        <Routes>
          <Route path="/" exact element ={<Home />} />
          <Route path="/Contact" exact element ={<Contact />} />
          <Route path="/About" exact element ={<About />} />
          <Route path="/Order" exact element ={<Order />} />
          {/* <Route path="/MenuList" exact element ={<MenuList />} /> */}
          <Route path="/Menu" exact element ={<Menu />} />
        </Routes>
      <Footer />
      </Router>
    
  

    </div>
  );
}

export default App;
