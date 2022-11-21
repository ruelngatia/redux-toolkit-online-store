import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[
      
    ],
    totals:0
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
        },

        addItemCount: (state, action)=>{
            state.items[action.payload].count = state.items[action.payload].count + 1
        },

        subItemCount: (state, action)=>{
            state.items[action.payload].count = state.items[action.payload].count - 1
        }

    }
})

export const {addCheckoutItems,subTotals,addTotals,setTotals, addItemCount,subItemCount,removeItems} = Checkout.actions

export default Checkout.reducer