import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchdata = createAsyncThunk('e_x/Product',  async () => {
    const FetchProduct = await fetch('https://fakestoreapi.com/products' , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const covertProduct = await FetchProduct.json()
    return covertProduct
})

const productsSlice = createSlice({
  name: "E_X/product",
  initialState: { data: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
  },
});

export default productsSlice;
