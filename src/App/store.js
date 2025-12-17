import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/cartSlice';
import wishlistReducer from '../Slices/wishListSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;