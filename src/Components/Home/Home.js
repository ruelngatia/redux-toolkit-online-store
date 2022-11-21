import Card from '../Card/Card';
import './Home.css'
import { useSelector, useDispatch  } from 'react-redux';
import { getItemList } from '../../Redux/ItemSlice';
import {  useEffect } from "react";

export default function Home(){

    const litsItems = useSelector((state) => state.items.items)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getItemList()) 
    },[])
   

    

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

                {Object.keys(litsItems).map((ele) => <Card keys={ele} element={ele}/>)} 

            </div>
        </div>
    );
}