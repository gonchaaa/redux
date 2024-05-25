import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './counter/cardSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
