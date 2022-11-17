import React from 'react'
import './Card.css'



export default function Card(props) {

  

  return (
    <div className='card'>
        <div className='imgContainer'>
           <img src={props.element.url} alt='con'/> 
        </div>
        <span>{props.element.url}</span>
        <br/>
        <span>{props.element.url}</span>
        <span className='discount'>
          {props.element.url}
        </span>

    </div>
  )
}
