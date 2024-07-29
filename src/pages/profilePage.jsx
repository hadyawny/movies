import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieListDetailsAction } from "../redux/store/slices/favListDetails.jsx";
import MovieCardMUI from "../components/movieCardMUI.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { user, isLoading: userLoading } = useSelector((state) => state.user);
  const { movies, isLoading: moviesLoading, error } = useSelector((state) => state.movieListDetails);

  useEffect(() => {
    if (user && user.favMovies && user.favMovies.length > 0) {
      dispatch(movieListDetailsAction(user.favMovies));
    }
  }, [dispatch, user ]);

  if (userLoading || moviesLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching movies.</h1>;

  return (
    <div>
      {!user ? (
        <h1>Please Sign In</h1>
      ) : (
        <>
          <h2>Welcome {user.userName}</h2>
          <h1>Favorite Movies: {user.favMovies ? user.favMovies.length : 0}</h1>
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={5}
              navigation
            >
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <MovieCardMUI
                      key={movie.id}
                      movie={movie}
                      initialFavorite={user && user.favMovies ? user.favMovies.includes(movie.id) : false}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <p>No favorite movies found.</p>
              )}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
