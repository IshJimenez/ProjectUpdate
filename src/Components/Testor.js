
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js';
import axios from 'axios'

function Testor (props) {
    let [view, setview] = useState([''])

    useEffect(() => {
        axios.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a255f8fdc5905848168ff3d1547407c0&hash=49ebf9a9561394a9f70d81126b731493db17fd1a')
        .then(res => {
            console.log(res)
            setview(res.data)
        })
        
    }, []
    )

    // const showview = () => {
    //     return view.map(eachview => {
    //         return (
    //             <li>
    //                 {eachview.title}
    //             </li>
    //         )
    //     })
    // }

    // https://api.nasa.gov/planetary/apod?api_key=Z5DfJhQFX8Fa1IZ6uSge818TqVjUOHVqVGbE93jQ

    http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a255f8fdc5905848168ff3d1547407c0&hash=49ebf9a9561394a9f70d81126b731493db17fd1a
    return (
        <div>
            <Navbar />
                {/* {showview} */}
            <h1>Click MEEEEEE</h1>
        </div>  
    );
}

export default Testor;