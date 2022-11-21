import { useSelector } from "react-redux";
import CartCard from "./CartCard/CartCard";
import './Cart.css'

export default function  Cart(){

    const cartItems = useSelector((state)=> state.checkout)
    var counter = 0
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