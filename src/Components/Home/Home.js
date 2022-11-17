import Card from '../Card/Card';
import './Home.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Home(){

    const litsItems = useSelector((state) => state.items.items)

    axios.post('https://online-store-b60ae-default-rtdb.firebaseio.com/items.json',{
        'name':'Ruel|s'
    })

    // axios.get('https://online-store-b60ae-default-rtdb.firebaseio.com/Online store.json')

    return (
        <div className='home'>
            <div className='image-section'>
                <div className='image-section-content'>
                    <h2>Your favourite one 
                        <br/>
                        stop shop.</h2>
                    <button>
                        Sign up
                    </button>
                </div>
            
            </div>
            <div className='category'>
                <ul>
                    <li>Fetured</li>
                    <li>All</li>
                    <li>Jewelery</li>
                    <li>Electronics</li>
                    <li>Men's fashion</li>
                    <li>Women's clothing</li>
                    
                </ul>
            </div>
            <div className='list-items'>

                {litsItems.map((ele) => <Card key = {ele.id} element={ele} />)}

            </div>
        </div>
    );
}