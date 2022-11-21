import React from 'react'
import { useSelector } from 'react-redux'
import './Card.css'



export default function Card(props) {

  const items = useSelector((state) => state.items.items)
  const key = props.element
  

  return (
    <div className='card'>
        <div className='imgContainer'>
           <img src={items[key].url} alt='con' /> 
        </div>
        <span>{items[key].name}</span>
        <br/>
        <span>{items[key]?.price}</span>
        <span className='discount'>
          {items[key]?.discount}
        </span>

    </div>
  )
}
