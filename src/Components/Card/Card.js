import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from "react-icons/md";
import './Card.css'
import axios from 'axios';
import { getAllItemsChart } from '../../Redux/CheckoutSlice';



export default function Card(props) {

  const items = useSelector((state) => state.items.items)
  const key = props.element
  const dispatch = useDispatch()


  return (
    
    <div className='card'>
        <div className='imgContainer'>
           <img src={items[key].image} alt='con' /> 
        </div>
        <span className='product-name'>{items[key].title }</span>
        <br/>
        <span className='product-price'>${items[key]?.price}</span>
        <span className='discount'>
          20% off
        </span>
        <br/>
        <div className='add-cart-icon'>
         <button onClick={
            ()=>{

              
              axios.post('https://online-store-b60ae-default-rtdb.firebaseio.com/cart.json',
              {
                  productKey:key,
                  name: items[key].title,
                  price: items[key]?.price,
                  image: items[key].image,
                  count: 1
                }
              ).then(()=>{
                dispatch(getAllItemsChart())
              })
              


            }
          }>
          Add to cart
         <MdAddShoppingCart className='icon' size={16}/>
         </button>
        </div>

    </div>
  )
}
