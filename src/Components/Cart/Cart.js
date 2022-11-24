import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard/CartCard";
import './Cart.css'
import { useEffect } from "react";
import { subTotals } from "../../Redux/CheckoutSlice";


export default function  Cart(){

    const cartItems = useSelector((state)=> state.checkout)
    const dispatch = useDispatch()
    var counter = 0

    useEffect(()=>{
        dispatch(subTotals())
    },[])
    
    return(
        <div className="cart">
            
            {cartItems.items.map((ele) => {
                counter++
                return <CartCard key={Math.random()} id={counter}/>
            })}



            <div className="check-out">
                <span>Totals: {cartItems.totals}</span>
                <br/>
                <button>check out</button>
            </div>
        </div>
    );
}