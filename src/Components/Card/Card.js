import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from "react-icons/md";
import './Card.css'
import { addCheckoutItems } from '../../Redux/CheckoutSlice';



export default function Card(props) {

  const items = useSelector((state) => state.items.items)
  const dispatch = useDispatch()
  const key = props.element
  


  return (
    <div className='card'>
        <div className='imgContainer'>
           <img src={items[key].image} alt='con' /> 
        </div>
        <span>{items[key].title }</span>
        <br/>
        <span>${items[key]?.price}</span>
        <span className='discount'>
          {items[key]?.discount}
        </span>
        <br/>
        <MdAddShoppingCart onClick={
          ()=>{
            dispatch(addCheckoutItems({
              name: items[key].name,
              price: items[key]?.price
            }))
          }
        }/>

    </div>
  )
}
