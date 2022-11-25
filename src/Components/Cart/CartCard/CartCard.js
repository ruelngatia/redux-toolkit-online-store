import { useDispatch, useSelector } from 'react-redux'
import { addItemCount, addTotals, changeProductCount, getAllItemsChart, removeItems, removeProduct, subItemCount, subTotals } from '../../../Redux/CheckoutSlice'
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
                            // dispatch(addTotals(item.price))
                            // dispatch(addItemCount((props.id-1)))
                            let price = parseInt(item.count)

                            dispatch(changeProductCount(
                                {
                                    id:item.idInChart,
                                    count: (price = price +1)
                                }
                            ))
                            dispatch(subTotals())

                        }}
                    >+</button></span>
                    <span>{item.count}</span>
                    <span><button
                        onClick={()=>{
                           
                            let price = parseInt(item.count)
                             if(price === 1){
                                dispatch(removeProduct(item.idInChart))
                                return
                            }
                            dispatch(changeProductCount(
                                {
                                    id:item.idInChart,
                                    count: (price = price -1)
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