import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[
      
    ],
    totals:0
}

function calculateSum(items,sum){
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
        setTotals: (state,action)=>{
            state.totals = action.payload
        },

        addTotals: (state,action)=>{
            state.totals = state.totals + parseInt(action.payload)
        },

        subTotals: (state,action)=>{
            state.totals = state.totals - parseInt(action.payload)
        },

        addCheckoutItems: (state,action) =>{
            state.items.push(action.payload)
        },

        removeItems: (state,action)=>{
            state.items.splice(action.payload,1)
            state.totals = calculateSum(state.items,state.totals)
        },

        addItemCount: (state, action)=>{
            state.items[action.payload].count = state.items[action.payload].count + 1
            state.totals = calculateSum(state.items,state.totals)
        },

        subItemCount: (state, action)=>{
            state.items[action.payload].count = state.items[action.payload].count - 1
            state.totals = calculateSum(state.items,state.totals)
        }

    }
})

export const {addCheckoutItems,subTotals,addTotals,setTotals, addItemCount,subItemCount,removeItems} = Checkout.actions

export default Checkout.reducer