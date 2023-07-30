// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products/fetchProduct"; // Correct the import path

const store = configureStore({
    reducer: {
        product: productsSlice.reducer,
    }
});

export default store;
