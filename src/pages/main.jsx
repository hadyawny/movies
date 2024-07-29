import NavBar from '../components/navBar.jsx';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
         <NavBar></NavBar>
         <Outlet></Outlet>   
         
        </>
    );
}

export default Main;
