import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { favMovieAction } from "../redux/store/slices/favListSlice.jsx";
import { useState } from 'react';

const MovieCardMUI = ({ movie, initialFavorite }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  let addToFavUrl= "https://moviesbackend-6ois.onrender.com/api/v1/users/addToFav";
  let removeFromFavUrl= "https://moviesbackend-6ois.onrender.com/api/v1/users/removeFromFav"

  const handleToggleFavorite = () => {
    if (isFavorite) {

      dispatch(favMovieAction({ url:removeFromFavUrl,movieId: String(movie.id), userId:userId }));
      setIsFavorite(false);
    } else {
      dispatch(favMovieAction({ url:addToFavUrl,movieId: String(movie.id), userId:userId }));
      setIsFavorite(true);
    }
  };


  return (
    <Card
      sx={{
        width: 350,
        backgroundColor: '#1e1e1e',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Link to={`/movie-details/${movie.id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="450"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: '#1e1e1e',
          color: '#ff4c4c',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          height: '110px',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography gutterBottom variant="h6" component="div">
            {movie.title}
          </Typography>
          <IconButton onClick={handleToggleFavorite}>
            {isFavorite ? <FavoriteIcon sx={{ color: '#ff4c4c' }} /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center">
          <StarIcon sx={{ color: '#ff4c4c' }} />
          <Typography variant="body2" sx={{ color: '#ffffff', ml: 1 }}>
            {parseFloat(movie.vote_average).toFixed(1)}/10
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCardMUI;
