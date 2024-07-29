import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../redux/store/slices/authSlice";
import classes from '../styles/signUpStyle.module.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const signUpUrl = "https://moviesbackend-6ois.onrender.com/api/v1/auth/signup";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error  } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction({ userData: formData, url: signUpUrl }))
      .unwrap()
      .then((response) => {
        if (response) {
            setFormData({
                userName: "",
                email: "",
                password: "",
                rePassword: "",
            });}
        
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign-up failed:", error);
      });
  };

  const getErrorMessage = (error) => {
    if (!error) return null;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    if (error.error) return error.error;
    return "An unknown error occurred";
  };

  return (
    <div className={classes.sign_up_container}>
      <form className={classes.sign_up_form} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
          />
        </div>
        <div>
          <label htmlFor="rePassword">Confirm Password:</label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
            required
          />
        </div>
        {error && <p>{getErrorMessage(error)}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
