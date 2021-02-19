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
                <h2>Dirty Pics With Curiosity</h2>
            </Link>
        </div>
        <div className = 'pic2'>
            <Link to="/weather">
                <img src={WeatherPic} alt="whats on the forecast" />
                <h2>Pic Of The Day</h2>
            </Link>
        </div>
        <div className = 'pic3'> 
            <Link to='/stars'>
            <img src={Testt} alt="whats on the forecast" />
            <h2>OOOh Knowledge</h2>
            </Link>
        </div>
        </div>

    );
}

export default Home;