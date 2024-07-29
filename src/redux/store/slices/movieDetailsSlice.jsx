import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieDetailsAction = createAsyncThunk(
  "user/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bbba1c3a46b2b8314bb9e82afd2edc73`);
    return response.data; 
  }
);

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movie: null,
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieDetailsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(movieDetailsAction.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.isLoading = false;
      })
      .addCase(movieDetailsAction.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default movieDetailsSlice.reducer;
