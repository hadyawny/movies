import '../styles/errorStyle.css'


const Error = () => {
    return (
       <>
       <div className="error-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/" className="home-link">Go to Homepage</a>
    </div>
       </>
    );
}

export default Error;
