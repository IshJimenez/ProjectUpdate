import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js'
import axios from 'axios'

function Stars () {
    let [star, setstar] = useState([''])

    useEffect(() => {
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then(des => {
            console.log(des)
            setstar(des.data.bodies)
        })
        
    }, []
    )

    const showstar = () => {
        return star.map(eachstar => {
            return (
                <li key={eachstar.id}>
                   {eachstar.name}
                   <h6>English Name: {eachstar.englishName}</h6>
                   <h6>Discovered By: {eachstar.discoveredBy}</h6>
                   <h6>Discovered on: {eachstar.discoveryDate}</h6>
                   <h6>Surface gravity in m.s-2.: {eachstar.gravity}</h6>
                   <br></br>
                   <br></br>

                    {/* <h6>{eachview.earth_date}</h6> */}
                    {/* <img src={eachview.img_src}/> */}
                </li>
            )
        })
        
    }

    return (
        <div>
            <Navbar />
        <div>
        <h6>{showstar()}</h6>
        </div>
        </div>
    );
}

    export default Stars;