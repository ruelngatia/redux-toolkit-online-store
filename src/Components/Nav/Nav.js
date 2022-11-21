import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

export default function Nav() {
  return (
    <div className='Nav'>
        <ul>
            <Link className='li' href={'/'}><li>Logo</li></Link>
            <Link className='li' to={'/'}><li>Home</li></Link>
            <Link className='li' to={'/'}><li>Shop</li></Link>
            <Link className='li' to={'/addProduct'}><li>Add Products</li></Link>
            <Link className='li' to={'/'}><li>About</li></Link>
            <Link className='li' to={'/checkout'}><li><AiOutlineShoppingCart/></li></Link>
            <Link className='li' to={'/login'}><li><MdAccountCircle/></li></Link>
        </ul>
    </div>
  )
}
