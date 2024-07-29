import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieListDetailsAction = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (ids) => {
    const requests = ids.map((id) =>
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bbba1c3a46b2b8314bb9e82afd2edc73`)
    );
    const responses = await Promise.all(requests);
    return responses.map(response => response.data);
  }
);

const movieListDetailsSlice = createSlice({
  name: "movieListDetails",
  initialState: {
    movies: [],
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieListDetailsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(movieListDetailsAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(movieListDetailsAction.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default movieListDetailsSlice.reducer;
