import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const favMovieAction = createAsyncThunk(
  "favMovieList",
  async ({url,userId,movieId}) => {
    
      const response = await axios.put(url,{
        "movieId": movieId,
        "userId":userId
      });
      return response.data;
    
  }
);


const favMovieListSlice = createSlice({
  name: "favMovieList",
  initialState: {
    user: {},
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(favMovieAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      
      .addCase(favMovieAction.pending, (state) => {
        state.isLoading = true;
      })
      
      .addCase(favMovieAction.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      
  },
});

export default favMovieListSlice.reducer;
