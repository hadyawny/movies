import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks to fetch movie lists
export const fetchTrendingMovies = createAsyncThunk("movies/fetchTrending",
  async () => {
    const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=bbba1c3a46b2b8314bb9e82afd2edc73");
    return response.data.results;
  }
);

export const fetchTopRatedMovies = createAsyncThunk("movies/fetchTopRated",
  async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=bbba1c3a46b2b8314bb9e82afd2edc73");
    return response.data.results;
  }
);

export const fetchNowPlayingMovies = createAsyncThunk("movies/fetchNowPlaying",
  async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=bbba1c3a46b2b8314bb9e82afd2edc73&language=en-US&page=1");
    return response.data.results;
  }
);

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    trendingMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTrendingMovies.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.isLoading = true;
      });

    builder
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTopRatedMovies.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.isLoading = true;
      });

    builder
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default movieListSlice.reducer;
