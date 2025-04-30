import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
    },
    reducers:{
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            } else {
                const temp = {...action.payload, qnty: 1};
                state.carts.push(temp);
            }
        },
        removeFromCart: (state, action) => {
            state.carts=state.carts.filter(item=>item.id!==action.payload)
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[itemIndex].qnty > 1) {
                state.carts[itemIndex].qnty -= 1;
            } else if (state.carts[itemIndex].qnty === 1) {
                const nextCart = state.carts.filter((cartItem) => cartItem.id !== action.payload.id);
                state.carts = nextCart;
            }
        },
        incrementQuantity: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            } else {
                const temp = {...action.payload, qnty: 1};
                state.carts.push(temp);
            }
    },
        clearCart: (state) => {
            state.carts = [];
        },
}
})
export const { addToCart, removeFromCart, decreaseQuantity,incrementQuantity ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;