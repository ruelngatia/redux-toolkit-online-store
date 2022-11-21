import './App.css';
import Nav from './Components/Nav/Nav';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Components/Home/Home';
import {Store} from './Redux/Store'
import { Provider } from 'react-redux';
import AddingProducts from './Components/AddingProduct/AddProducts';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import { useEffect } from 'react';
import Contact from './Components/Contact.js/Contact';
import About from './Components/About/About';


function App() {

  const navigator = useNavigate()

  useEffect(()=>{
    {navigator('/login')}
  },[])

  return (
    <div className="App">
    <Provider store={Store}>

      
      <Nav url={window.location.pathname}/>
      
      
      <div className='place-holder'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addProduct' element={<AddingProducts/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Provider>
      
    
    </div>
  );
}

export default App;
