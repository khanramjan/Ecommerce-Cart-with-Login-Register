import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import LoginSlice from '../features/LoginSlice';
 const store = configureStore({
    reducer: {
        cart: cartSlice,
        login: LoginSlice
    },
    
})
export default store;