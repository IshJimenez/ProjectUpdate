import React from 'react';
import { Link } from 'react-router-dom';
import Testt from './Testt.png';

function Home() {
    return (
        <div>
                <h1>Im ALIVE</h1>
        <div className = 'pic1'>
            <Link to="/testor">
            <img src={Testt} alt="better work bitch" />
            <h2>Click Me</h2>
            <p>Takes you there</p>
            </Link>
        </div>
        </div>
    );
}

export default Home;