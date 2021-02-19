import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js'
import axios from 'axios'

function Weather () {
    let [Bat, setBat] = useState([''])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Z5DfJhQFX8Fa1IZ6uSge818TqVjUOHVqVGbE93jQ')
        .then(res => {
            console.log(res)
            setBat(res.data)
        })

    }, [] 
    )

    // const showBat = () => {
    //     return Bat.map(eachBat => {
    //         return (
    //             console.log(Bat.title)
    //             // <li key={eachBat.id}>
    //             // {/* <h1>{eachBat.title}</h1> */}
    //             // <img src={eachBat.hdurl} />
    //             // </li>
    //         )
    //     })
    // }

    return (
    <div class="Ttob">
        <Navbar />
    <div className="Tob">
            {/* {showBat()} */}
            <h4>{Bat.title}</h4>
            <img src={Bat.hdurl} />
    <div className="Tobb">
            {/* <h4>{Bat.title}</h4> */}
            <h6>{Bat.explanation}</h6>
    </div>
    </div>
    </div>
    );
}

export default Weather;