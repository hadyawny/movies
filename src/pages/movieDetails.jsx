import { useParams } from "react-router-dom";
import { useEffect } from "react";
import '../styles/movieDetailsStyle.css'
import { movieDetailsAction } from "../redux/store/slices/movieDetailsSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, isLoading, error } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(movieDetailsAction(id));
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error || !movie) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div className="movie-details-container">
      <h1 className="movie-title">{movie.title}</h1>
      <div className="movie-details">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {parseFloat(movie.vote_average).toFixed(1)} <span className="star-icon">⭐</span></p>
          <p><strong>Overview:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
