import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    const [state, setState] = useState({
        longitude: 0,
        latitude: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setState({ 
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            function (error) {
                console.log(error)
            },
            {
                    enableHighAccuracy: true
            }
        )
    })

    return <div>
        <h1>Geolocation</h1>
        <p>longitude: {state.longitude}</p>
        <p>latitude: {state.latitude}</p>

        <Link to={{
            pathname: '/map',
            state
        }}>See my Location</Link>
        
    </div>
}

export default Home