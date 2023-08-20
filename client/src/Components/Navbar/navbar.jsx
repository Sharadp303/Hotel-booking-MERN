import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar=()=>{    
    return(
        <>
            <div className="navbar">
            <Link className="appName" to="/">BOOKING</Link>
                <div className="nav-container">
                <span className='links'><a href="/">Home</a></span>
                <span className='links'><a href="www.google.com">About Us</a></span>
           
                <span className='button-container'>
                    <button className='navbutton' ><a href="/register">Register</a></button>
                    <button className='navbutton' ><a href="/login">Login</a></button>
                </span>
                </div>
                
            </div>
        </>
    );
}

export default Navbar;