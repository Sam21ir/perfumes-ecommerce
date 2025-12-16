import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const MAX_QUANTITY = 20;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.productID === product.productID
      );
      
      if (existingItem) {
        if (existingItem.quantity < MAX_QUANTITY) {
          existingItem.quantity += 1;
          state.totalAmount += product.productPrice;
          state.totalQuantity += 1;
        }
      } else {
        state.items.push({ ...product, quantity: 1 });
        state.totalAmount += product.productPrice;
        state.totalQuantity += 1;
      }
    },
    
    updateQuantity(state, action) {
      const { productID, quantity } = action.payload;
      const itemToUpdate = state.items.find(
        (item) => item.productID === productID
      );
      
      if (itemToUpdate) {
        const difference = quantity - itemToUpdate.quantity;
        
        if (quantity <= MAX_QUANTITY && quantity > 0) {
          itemToUpdate.quantity = quantity;
          state.totalAmount += difference * itemToUpdate.productPrice;
          state.totalQuantity += difference;
        } else if (quantity <= 0) {
          state.totalAmount -= itemToUpdate.productPrice * itemToUpdate.quantity;
          state.totalQuantity -= itemToUpdate.quantity;
          state.items = state.items.filter(
            (item) => item.productID !== productID
          );
        }
      }
    },
    
    removeFromCart(state, action) {
      const productId = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.productID === productId
      );
      
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.productPrice * itemToRemove.quantity;
        state.totalQuantity -= itemToRemove.quantity;
        state.items = state.items.filter(
          (item) => item.productID !== productId
        );
      }
    },
    
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalAmount = (state) => state.cart.totalAmount;
export const selectCartTotalQuantity = (state) => state.cart.totalQuantity;

export default cartSlice.reducer;