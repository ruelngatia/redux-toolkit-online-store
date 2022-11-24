import { useDispatch, useSelector } from 'react-redux'
import { addItemCount, addTotals, changeProductCount, removeItems, removeProduct, subItemCount, subTotals } from '../../../Redux/CheckoutSlice'
import './CartCard.css'
import { MdDeleteOutline } from "react-icons/md";

export default function CartCard(props){

    const items = useSelector((state) => state.checkout.items)
    const item = items[(props.id - 1)]
    const dispatch = useDispatch()
  

    return(
        <div className="cart-card">
            <div className='card-item'>
                <img src={item.image} alt='product'/>
                
                <div>
                    <span className='item-name'>{item.name}</span>
                    <br/>
                    <span className='item-price'>${item.price}</span>

                </div>
                <div className='item-counters'>
                    <span><button
                        onClick={()=>{
                            dispatch(addTotals(item.price))
                            dispatch(addItemCount((props.id-1)))
                        }}
                    >+</button></span>
                    <span>{item.count}</span>
                    <span><button
                        onClick={()=>{
                            // dispatch(subTotals(item.price))
                            // dispatch(subItemCount((props.id-1)))
                            // if(item.count === 1){
                            //     dispatch(removeItems((props.id-1)))
                            // }

                            dispatch(changeProductCount(item.idInChart,
                                {
                                    count: 2
                                }
                            ))
                            dispatch(subTotals())
                        }}
                    >-</button></span>
                </div>
                
                    <span className='del' onClick={
                        ()=>{
                            // dispatch(removeItems((props.id-1)))
                            dispatch(removeProduct(item.idInChart))
                            console.log(item.idInChart);
                        }
                        }><MdDeleteOutline/>
                    </span>
            
            </div>
        </div>
    )
}