import React, { useEffect, useState } from 'react';
import logo from '../../images/logo1.png';
import './Workout.css'

const Workout = () => {

    const [gyms, setGym] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setGym(data))
    }, [])

    return (
        <div className='container'>
            
            <div className="row">
                <img src={logo} alt="" />
                <div className="exercise-container">
                    {
                        gyms.map(gym => console.log(gym))
                    }
                </div>
                <div className="exercise-details">
                    <h5>About Details</h5>
                </div>
            </div>
        </div>
    );
};

export default Workout;