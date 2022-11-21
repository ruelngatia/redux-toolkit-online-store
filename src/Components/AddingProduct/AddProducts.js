import axios from "axios";
import React ,{useRef} from "react"; 
import { useNavigate} from "react-router-dom";
import './AddingProducts.css' 

export default function AddingProducts(props){

    let title 
    let description 
    let price 
    let category 
    let image;

    const navigate = useNavigate()
    const ref = useRef()

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
            alert('enter missing field')
            return false
        }
        // if(image === '' || image == null){
        //     alert('enter missing category')
        //     return false
        // }
       
    }

    const postItem = (item)=>{

        axios.post('https://online-store-b60ae-default-rtdb.firebaseio.com/items.json',item)

    }
    

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

            {console.log(title)}

            <button type="button" onClick={()=>{
                
                console.log(title);
                console.log(price);
                console.log(description);
                console.log(category);


                 let product = {
                    title: title,
                    price: price,
                    description: description,
                    image: 'https://i.pravatar.cc',
                    category: category
                }

                console.log(product);
    

                // if(!formValidator()){
                //     return;
                // }else{
               
                //     postItem(product)
                // }
                
            
                // navigate('/')
                
            }}>Add element</button>
            <br/>

          </form>

        </div>
    )
}