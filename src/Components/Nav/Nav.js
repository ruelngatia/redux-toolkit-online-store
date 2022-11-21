import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from 'react-redux';

export default function Nav(props) {

  const itemCount = useSelector((state) => state.checkout.items)

  return (
    <div className='Nav' style={
      window.location.pathname == '/login'? {display:"none"}:{display:''}
    }>
        <ul>
            <Link className='li' href={'/'}><li>Logo</li></Link>
            <Link className='li' to={'/'}><li>Home</li></Link>
            <Link className='li' to={'/'}><li>Shop</li></Link>
            <Link className='li' to={'/addProduct'}><li>Add Products</li></Link>
            <Link className='li' to={'/'}><li>About</li></Link>
            <Link className='li' to={'/checkout'}><li><span className='amount-span'><AiOutlineShoppingCart size={20}/><span id='amount'>{itemCount.length}</span></span></li></Link>
            <Link className='li' to={'/login'}><li><MdAccountCircle size={20}/></li></Link>
        </ul>
    </div>
  )
}
