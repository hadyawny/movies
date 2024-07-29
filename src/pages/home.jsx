import {  useEffect} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import '../styles/homeStyle.css'
import MovieCardMUI from "../components/movieCardMUI.jsx";
import { useDispatch, useSelector } from "react-redux";
import {  fetchTopRatedMovies, fetchTrendingMovies, fetchNowPlayingMovies } from "../redux/store/slices/movieListSlice.jsx";
import { CircularProgress, Typography } from "@mui/material";
import { userInfoAction } from "../redux/store/slices/userInfoSlice.jsx";

const Home = () => {

  const dispatch = useDispatch();
  const { trendingMovies, topRatedMovies, nowPlayingMovies, isLoading, error } = useSelector((state) => state.movieList);
  const { user } = useSelector((state) => state.user);
  const { userId } = useSelector((state) => state.auth);



  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchNowPlayingMovies());
    if (userId) {
      dispatch(userInfoAction(userId));
    }
  }, [dispatch,userId]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Failed to load movies.</Typography>;
  }

  return (
    <>
    

      <h1>Trending </h1>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
      >
        
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardMUI key={movie.id} movie={movie}  initialFavorite={user && user.favMovies ? user.favMovies.includes(movie.id) : false}/>

          </SwiperSlide>
        ))}
      </Swiper>

      <h1>Top Rated </h1>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
      >
        
        {topRatedMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardMUI key={movie.id} movie={movie} initialFavorite={user && user.favMovies ? user.favMovies.includes(movie.id) : false}  />

          </SwiperSlide>
        ))}
      </Swiper>

      <h1>Now Playing </h1>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
      >
        
        {nowPlayingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardMUI key={movie.id} movie={movie} initialFavorite={user && user.favMovies ? user.favMovies.includes(movie.id) : false} />

          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default Home;
