import { Link } from 'react-router-dom';
import '../styles/navStyle.css'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="navbar">
            <img src="./launcher_icon.png" alt="launcher_icon" style={{width:'50px'}}/>
            
            <Link to='/'>Home</Link>

            {user &&<Link to='/profile'>Profile</Link>}

            <Link to='/about'>About</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>




        </div>
    );
}

export default NavBar;
