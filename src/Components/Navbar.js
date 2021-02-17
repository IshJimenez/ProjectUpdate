import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navBar'>
           <Link to='/'>
                <img src='https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png' alt='Home' />
            </Link>
        </div>
    )
}

export default Navbar;


// https://api.nasa.gov/planetary/apod?api_key=Z5DfJhQFX8Fa1IZ6uSge818TqVjUOHVqVGbE93jQ

