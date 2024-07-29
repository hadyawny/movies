import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.jsx'
import movieListReducer from './slices/movieListSlice.jsx'
import userReducer from './slices/userInfoSlice.jsx'
import favMovieListReducer from './slices/favListSlice.jsx'
import movieDetailsReducer from './slices/movieDetailsSlice.jsx'
import movieListDetailsReducer from './slices/favListDetails.jsx'


const store = configureStore({
  reducer: {
    auth: authReducer,
    movieList: movieListReducer,
    user: userReducer,
    favMovieList: favMovieListReducer,
    movieDetails: movieDetailsReducer,
    movieListDetails:movieListDetailsReducer

  },
});

export default store;