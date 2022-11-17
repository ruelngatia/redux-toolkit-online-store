import { createSlice } from "@reduxjs/toolkit";



const initialValue = {
    items:[]
}

export const itemsSlice = createSlice({

    name:'items',
    initialState: initialValue,
    reducers:{
        getItems:(state) =>{
            
        }
    }

})

export const {getItems} = itemsSlice.actions

export default itemsSlice.reducer 