import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;
      const exists = state.items.find(
        (item) => item.productID === product.productID
      );
      
      if (!exists) {
        state.items.push(product);
      }
    },
    
    removeFromWishlist(state, action) {
      const productId = action.payload;
      state.items = state.items.filter(
        (item) => item.productID !== productId
      );
    },
    
    toggleWishlist(state, action) {
      const product = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.productID === product.productID
      );
      
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(product);
      }
    },
    
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { 
  addToWishlist, 
  removeFromWishlist, 
  toggleWishlist, 
  clearWishlist 
} = wishlistSlice.actions;

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectIsInWishlist = (productID) => (state) =>
  state.wishlist.items.some((item) => item.productID === productID);

export default wishlistSlice.reducer;