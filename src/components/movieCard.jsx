import classes from '../styles/movieCardStyle.module.css'
import PropTypes from "prop-types"; 

const MovieCard = ({ movie }) => {
  return (
    <div className={classes.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={classes.moviePoster}
      />
      <div className={classes.movieInfo}>
        <div className={classes.movieTitle}>{movie.title}</div>
        <div className={classes.movieDetails}>
          <div className={classes.movieYear }>
            {parseFloat(movie.vote_average).toFixed(1)}{" "}
           ⭐
          </div>
          <div className={classes.movieYear}>{parseInt(movie.release_date)}</div>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
