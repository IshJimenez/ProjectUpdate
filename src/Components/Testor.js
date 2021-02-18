
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js';
import axios from 'axios'

function Testor () {
    let [view1, setview] = useState([''])

    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Z5DfJhQFX8Fa1IZ6uSge818TqVjUOHVqVGbE93jQ')
        .then(res => {
            console.log(res)
            setview(res.data.photos)
        })
        
    }, []
    )

    const showview = () => {
        return view1.map(eachview => {
            return (
                <li key={eachview.id}>
                    {/* <h1>{eachview.rover?.name}</h1> */}
                    {/* <h6>{eachview.earth_date}</h6> */}
                    <img src={eachview.img_src}/>
                </li>
            )
        })
        
    }

    const showrover = () => {
        return view1.map(eachview => {
            return (
                <h1>{eachview.rover?.name}</h1>
            )
        })
    }

    // https://api.nasa.gov/planetary/apod?api_key=Z5DfJhQFX8Fa1IZ6uSge818TqVjUOHVqVGbE93jQ

    // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a255f8fdc5905848168ff3d1547407c0&hash=49ebf9a9561394a9f70d81126b731493db17fd1a
    return (
        <div className="Bbob">
        
            <Navbar />
            <div className="Bob">
            <h1>Curiosity</h1>
            <p>As established by the Mars Exploration Program, the main scientific goals of the MSL mission are to help determine whether Mars could ever have supported life, as well as determining the role of water, and to study the climate and geology of Mars</p>
            <p>Photos taken 2015-05-</p>
            <p></p>
            <p></p>
            <p></p>
                <ul>
                {showview()}
                {showrover()}
                </ul>
            </div>
        
        </div>
    );
}

export default Testor;