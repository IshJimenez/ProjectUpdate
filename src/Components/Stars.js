import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js'
import axios from 'axios'

function Stars () {
    let [stars, setstars] = useState([''])

    useEffect(() => {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Z5DfJhQFX8Fa1IZ6uSge818TqVjUOHVqVGbE93jQ')
        .then(des => {
            console.log(des)
            setstars(des.data)
        })
        
    }, []
    )

    return (
        <div>
            <Navbar />
        </div>
    );
}

    export default Stars;