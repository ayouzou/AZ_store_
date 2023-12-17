import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: { value: [] },
    reducers: {
        addToCart: (state, action) => {
         
            const itemInCart = state.value.find((item) => item._id === action.payload._id)
            if (itemInCart) {
                itemInCart.count++;
            } else {
                state.value.push({ ...action.payload, count: 1 })
            }
        },
        incrementCount: (state, action) => {
            const item = state.value.find((item) => item._id === action.payload);
            item.count++;
        },
        decrementCount: (state, action) => {
            const item = state.value.find((item) => item._id === action.payload);
            if (item.count === 1) {
              item.count = 1
            } else {
              item.count--;
            }
          },
        deleteFromCart: (state, action) => {
            const removeItem = state.value.filter((item) => item._id !== action.payload);
            state.value = removeItem;

        },
        deleteAnything: (state, action) => {
            state.value = [];
        },
    }
})

export const { addToCart, deleteFromCart,incrementCount,decrementCount, deleteAnything} = cartSlice.actions;
export default cartSlice.reducer;