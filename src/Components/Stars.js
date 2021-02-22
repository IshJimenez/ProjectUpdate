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
                   <h2>{eachstar.name}</h2>
                   <h6>English name: {eachstar.englishName}</h6>
                   <h6>Discovered by: {eachstar.discoveredBy}</h6>
                   <h6>Discovered on: {eachstar.discoveryDate}</h6>
                   <h6>Revolves around: {eachstar.aroundPlanet?.planet}</h6>
                   <h6>Earth gravity in m.s-2: 9.8</h6>
                   <h6>Surface gravity in m.s-2: {eachstar.gravity}</h6>
                   <br></br>
                   <br></br>
                </li>
            )
        })
        
    }


    return (
        <div className="planetH">
            <Navbar />
        <div className="planetCard">
        <h5 className="planetinfo">Moons – also known as natural satellites – orbit planets and asteroids in our solar system</h5>
        <h5>Moons come in many shapes, sizes, and types. A few have atmospheres and even hidden oceans beneath their surfaces. Most planetary moons probably formed from the discs of gas and dust circulating around planets in the early solar system, though some are "captured" objects that formed elsewhere and fell into orbit around larger worlds.</h5>
        <div className ="box">
        <h6 className ="boxx">{showstar()}</h6>
        </div>
        </div>
        </div>
    );
}

    export default Stars;