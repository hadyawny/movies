// import axios from "axios"
// import { createContext, useEffect, useState } from "react"

// export const moviesContext = createContext()

// const MoviesContextProvider=({children})=>{
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/trending/movie/week?api_key=bbba1c3a46b2b8314bb9e82afd2edc73"
//       )
//       .then((res) => setTrendingMovies(res.data.results))
//       .catch((err) => console.error(err));
//   }, []);
  
  
  
//   return <moviesContext.Provider value={{trendingMovies}}>
// {children}
//   </moviesContext.Provider>

// }
// export default MoviesContextProvider;