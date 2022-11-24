import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getItemList = createAsyncThunk('fetch/allItems',
    async(_,o) =>{
        let list = await axios.get('https://online-store-b60ae-default-rtdb.firebaseio.com/items.json')
        return list.data
    }
)


const initialValue = {
    loading:false,
    items: {}
}

export const itemsSlice = createSlice({

    name:'items',
    initialState: initialValue,
    reducers:{
        getItems:(state) =>{
            
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getItemList.fulfilled,(state,action)=>{
            state.items = action.payload
            // state.items.push(JSON.stringify(action.payload))
        })
        // builder.addCase(getItem.pending,(state,action)=>{
        //     state.loading = true;
        // })
    }

})



export const {getItems} = itemsSlice.actions

export default itemsSlice.reducer 