import { createBrowserRouter } from "react-router-dom";


import Main from "../pages/main.jsx";
import Home from "../pages/home.jsx";
import MovieDetails from "../pages/movieDetails.jsx";
import About from "../pages/about.jsx";
import Error from "../pages/error.jsx";
import SignUp from "../pages/signUpPage.jsx";
import SignIn from "../pages/SignInPage.jsx";
import Profile from "../pages/profilePage.jsx";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "movie-details/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      
    ],
  },
  {},
]);
