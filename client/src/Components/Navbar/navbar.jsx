import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar=()=>{    
    return(
        <>
            <span className="navbar">
            <Link className="appName" to="/">BOOKING</Link>
                <span className='button-container'>
                    <button className='navbutton' ><a href="/register">Register</a></button>
                    <button className='navbutton' ><a href="/login">Login</a></button>
                </span>
            </span>
        </>
    );
}

export default Navbar;