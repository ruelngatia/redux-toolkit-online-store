import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTotals, subTotals } from '../../../Redux/CheckoutSlice'
import './CartCard.css'

export default function CartCard(props){

    const items = useSelector((state) => state.checkout.items)
    const item = items[(props.id - 1)]
    const dispatch = useDispatch()

    const [itemCount,setItemcount] = useState(1)

    useEffect(()=>{
        if(itemCount === 0){
            items.splice()
        }
    },[itemCount])

  

    return(
        <div className="cart-card">
            <div className='card-item'>
                <img src='https://i.pravatar.cc/100'/>
                
                <div>
                    <span className='item-name'>{item.name}</span>
                    <br/>
                    <span className='item-price'>${item.price}</span>

                </div>
                <div className='item-counters'>
                    <span><button
                        onClick={()=>{
                            dispatch(addTotals(item.price))
                            setItemcount(itemCount + 1)
                            console.log(itemCount);
                        }}
                    >+</button></span>
                    <span>{itemCount}</span>
                    <span><button
                        onClick={()=>{
                            dispatch(subTotals(item.price))
                            setItemcount(itemCount -1)
                        }}
                    >-</button></span>
                </div>
            </div>
        </div>
    )
}