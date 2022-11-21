import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[
        {
            name: 'cow',
            price: 100
        }
    ],
    totals:0
}

export const Checkout = createSlice({
    name:'checkoutSlice',
    initialState: initialState,
    reducers: {
        addTotals: (state,action)=>{
            state.totals = state.totals + action.payload
        },

        subTotals: (state,action)=>{
            state.totals = state.totals - action.payload 
        },

        addItems: (state,action) =>{
            state.items.push(action.payload)
        },

        removeItems: (state,action)=>{
            state.items.splice(action.payload,1)
        }

    }
})

export const {addItems,subTotals,addTotals} = Checkout.actions

export default Checkout.reducer