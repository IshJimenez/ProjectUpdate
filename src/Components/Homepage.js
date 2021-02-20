import React from 'react';
import { Link } from 'react-router-dom';
import Testt from './Testt.png';
import Curious from './Curious.jpg';
import WeatherPic from './WeatherPic.JPG'
import Header from './Header.js'

function Home() {
    return (
        <div className="page">
            <Header />
        <div className = 'pic1'>
            <Link to="/testor">
                <img src={Curious} alt="better work bitch" />
                <h3>Dirty Pics With Curiosity</h3>
            </Link>
        </div>
        <div className = 'pic2'>
            <Link to="/weather">
                <img src={WeatherPic} alt="whats on the forecast" />
                <h3>Pic Of The Day</h3>
            </Link>
        </div>
        <div className = 'pic3'> 
            <Link to='/stars'>
            <img src={Testt} alt="whats on the forecast" />
            <h3>OOOh Knowledge</h3>
            </Link>
        </div>
        </div>

    );
}

export default Home;