import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from './ItemSlice'

// console.log({ItemReducer})

export const Store = configureStore({
  reducer: {
    items: ItemReducer
  },
})