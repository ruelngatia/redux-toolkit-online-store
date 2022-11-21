import { configureStore } from '@reduxjs/toolkit'
import { Checkout } from './CheckoutSlice'
import ItemReducer from './ItemSlice'
import checkoutReducer from './CheckoutSlice'



export const Store = configureStore({
  reducer: {
    items: ItemReducer,
    checkout: checkoutReducer
  },
})