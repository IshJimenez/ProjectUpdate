import React from 'react';
import { Link } from 'react-router-dom';
import Testt from './Testt.png';
import Curious from './Curious.jpg';
import WeatherPic from './WeatherPic.JPG'

function Home() {
    return (
        <div>
                <h1>JOURNEY WITH CURIOSITY</h1>
        <div className = 'pic1'>
            <Link to="/testor">
                <img src={Curious} alt="better work bitch" />
                <h2>Click Above For Dirty Pics</h2>
            </Link>
        </div>
        <div>
            <Link to="/weather">
                <img src={WeatherPic} alt="whats on the forecast" />
                <h2>Click To See Pic Of The Day</h2>
            </Link>
        </div>
        <div>
            <Link to='/stars'>
            <img src={Testt} alt="whats on the forecast" />
            <h2>OOOh stars</h2>
            </Link>
        </div>
        </div>

    );
}

export default Home;