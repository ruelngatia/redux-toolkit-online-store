import React from "react"; 
import { Link, Navigate, Route ,useNavigate} from "react-router-dom";
import './AddingProducts.css' 

export default function AddingProducts(props){

    let title 
    let description 
    let price 
    let category 
    let image;

    function formValidator(){
        if(title === '' || title == null){
            alert('enter missing field')
            return false
        }
        if(description === '' || description == null){
            alert('enter missing field')
            return false
        }
        if(price === '' || price == null){
            alert('enter missing field')
            return false
        }
        if(category === '' || category == null){
            alert('enter missing field')
            return false
        }
        if(image === '' || image == null){
            alert('enter missing field')
            return false
        }
       
    }

    const navigate = useNavigate()

    return(
        <div className="adding-products">
            <h2>Add your items here</h2>
          <form>
            
            <div>
                <label>Title</label>
                <br/>
                <input id="inTitle" type={'text'} onChange={(ele) => {title = ele.target.value} }/>     
            </div>
            <div>
                <label>Category</label>
                <br/>
                <select id="inCactegory" onChange={(ele) => {category = ele.target.value}}>
                    <option>Electornics</option>
                    <option>Jewelery</option>
                    <option>Men's clothing</option>
                    <option>Womens's clothing</option>
                </select>
            </div>
            <div>
                <label>Description</label>
                <br/>
                <textarea id="inDescription" rows={5} onChange={(ele) => {description = ele.target.value}}/>
            </div>

            <div>
                <label>Price {'(Ksh)'}</label>
                <br/>
                <input id="inPrice"  type={'number'} onChange={(ele) => {price = ele.target.value}}/>
            </div>

            <div className="add-image">

            </div>

            <button type="button" onClick={()=>{
                
                if(!formValidator()){
                    return;
                }
                // let product ={
                //     id: Math.random().toFixed(1),
                //     title: title.value,
                //     price: price.value,
                //     description: description.value,
                //     image: 'https://i.pravatar.cc',
                //     category: category.value
                // }
            
                navigate('/')
                
            }}>Add element</button>
            <br/>

          </form>

        </div>
    )
}