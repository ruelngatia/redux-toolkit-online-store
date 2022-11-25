import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    items:[
      
    ],
    totals:0
}

export const getAllItemsChart = createAsyncThunk('getting/products',async()=>{
    let list = await axios.get('https://online-store-b60ae-default-rtdb.firebaseio.com/cart.json')
    return list.data
})

export const addItemstoCart = createAsyncThunk('addingProducts',async(product)=>{
    await axios.post('https://online-store-b60ae-default-rtdb.firebaseio.com/cart',product)
})

export const changeProductCount = createAsyncThunk('product/increase',async(change,thunk)=>{
  
    let res = await axios.patch(`https://online-store-b60ae-default-rtdb.firebaseio.com/cart/${change.id}.json`,{count:change.count})
    .then(()=>{
        thunk.dispatch(getAllItemsChart())
    }).then(()=>{
        thunk.dispatch(subTotals())
    })
    
    console.log(change.count);
})

export const removeProduct = createAsyncThunk('remove/product',async(id,thunk)=>{
    let res = await axios.delete(`https://online-store-b60ae-default-rtdb.firebaseio.com/cart/${id}.json`)
    .then(()=>{
        thunk.dispatch(getAllItemsChart())
        
    }).then(()=>{
        thunk.dispatch(subTotals())
    })
    
    // thunk.dispatch(subTotals())
    console.log(res);
})

function calculateSum(items){
    let sum = 0
    items.forEach(element => {
        sum = sum + parseInt((element.count * element.price ))
    });
    console.log(sum)
    return sum;
}

export const Checkout = createSlice({
    name:'checkoutSlice',
    initialState: initialState,
    reducers: {
       
        addTotals: (state,action)=>{
            state.totals = state.totals + parseInt(action.payload)
        },

        subTotals: (state,action)=>{
            state.totals = calculateSum(state.items)
        },

        addCheckoutItems: (state,action) =>{
            state.items.push(action.payload)
        },

        removeItems: (state,action)=>{
            state.items.splice(action.payload,1)
            state.totals = calculateSum(state.items)
        },

        addItemCount: (state, action)=>{
            state.items[action.payload].count = state.items[action.payload].count + 1
            state.totals = calculateSum(state.items)
        },

        subItemCount: (state, action)=>{
            state.items[action.payload].count = state.items[action.payload].count - 1
            state.totals = calculateSum(state.items)
        }

    },

    extraReducers: (builder)=>{
        
        builder.addCase(getAllItemsChart.fulfilled,(state,action)=>{
            state.items = []
            let obj = action.payload;
            if(obj == null){
                return
            }
            let keys = Object.keys(obj)
            keys.forEach((key)=>{
                state.items.push({...obj[key],idInChart:key})
            })
        })
        builder.addCase(addItemstoCart.fulfilled,(state,action)=>{
            state.items = action.payload
        })
        builder.addCase(changeProductCount.fulfilled,(state,action)=>{
            // change count
        })
    }
})

export const {addCheckoutItems,subTotals,addTotals,setTotals, addItemCount,subItemCount,removeItems} = Checkout.actions

export default Checkout.reducer