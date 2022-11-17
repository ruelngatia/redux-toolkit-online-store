import './App.css';
import Nav from './Components/Nav/Nav';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import {Store} from './Redux/Store'
import { Provider } from 'react-redux';
import AddingProducts from './Components/AddingProduct/AddProducts';




function App() {
  return (
    <div className="App">
    <Provider store={Store}>
      <Nav/>
      <div className='place-holder'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addProduct' element={<AddingProducts/>}/>
        </Routes>
      </div>
    </Provider>
      
      
     
    
    
    </div>
  );
}

export default App;
