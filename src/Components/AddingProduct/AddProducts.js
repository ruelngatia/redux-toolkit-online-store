import axios from "axios";
import React ,{useEffect, useRef, useState} from "react"; 
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { getItemList } from "../../Redux/ItemSlice";
import './AddingProducts.css' 

export default function AddingProducts(props){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [title ,setTitle] = useState('')
    const [description ,setdescription] = useState('')
    const [price ,setprice] = useState('')
    const [category ,setcategory] = useState('Electornics')
    const [image ,setimage] = useState('')

   

    function formValidator(){

     

        if(title === '' || title == null){
            alert('enter missing title')
            
            return false
        }
        if(description === '' || description == null){
            alert('enter missing des')
            return false
        }
        if(price === '' || price == null){
            alert('enter missing price')
            return false
        }
        if(category === '' || category == null){
            alert('enter missing category')
            return false
        }
        // if(image === '' || image == null){
        //     alert('enter missing image')
        //     return false
        // }
       
    }

    const postItem = (item)=>{

        axios.post('https://online-store-b60ae-default-rtdb.firebaseio.com/items.json',item)

    }
    

    return(
        <div className="adding-products">
            <h2>Add your items here</h2>
          <form >
            
            <div>
                <label>Title</label>
                <br/>
                <input id="inTitle"  type={'text'} onChange={(ele) => {setTitle(ele.target.value)} }/>     
            </div>
            <div>
                <label>Category</label>
                <br/>
                <select  id="inCactegory"  onChange={(ele) => {setcategory(ele.target.value)}}>
                    <option>Electornics</option>
                    <option>Jewelery</option>
                    <option>Men's clothing</option>
                    <option>Womens's clothing</option>
                </select>
            </div>
            <div>
                <label>Description</label>
                <br/>
                <textarea  id="inDescription" rows={5} onChange={(ele) => {setdescription(ele.target.value)}}/>
            </div>

            <div>
                <label>Price {'(Ksh)'}</label>
                <br/>
                <input  id="inPrice"  type={'number'} onChange={(ele) => {setprice(ele.target.value)}}/>
            </div>

            <div className="add-image">

            </div>


            <button type="button" onClick={()=>{
                
                
               


                 let product = {
                    title: title,
                    price: price,
                    description: description,
                    image: 'https://i.pravatar.cc',
                    category: category
                }

               

                if(formValidator()){
                    return;
                }else{
                    console.log('called');
                    postItem(product)
                }
                dispatch(getItemList()) 
            
                navigate('/')
                
            }}>Add element</button>
            <br/>

          </form>

        </div>
    )
}