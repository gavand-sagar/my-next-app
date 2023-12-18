import { Product } from './../app/products/product.type';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { axiosInstance } from '@/services/axiosService'

export interface CounterState {
  value: number,
  isLoading:boolean,
  products: any[]
}

const initialState: CounterState = {
  value: 0,
  products: [],
  isLoading:false
}



export const getAllProducts = createAsyncThunk("getAllProducts", () => {
  return axiosInstance.get('/product')
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
    })
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data.products
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer