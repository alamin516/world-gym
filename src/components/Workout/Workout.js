import React, { useEffect, useState } from 'react';
import logo from '../../images/logo1.png';
import ExerciseDetails from '../Exercise-Details/ExerciseDetails';
import Exercise from '../Exercise/Exercise';
import Question from '../Question/Question';
import './Workout.css'

const Workout = () => {

    const [gyms, setGym] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGym(data))
    }, [])

    const handleAddToCart = (gym) =>{
        const newCart = [...cart, gym];
        setCart(newCart);
    }

    return (
        <div className='container'>
                <div className="exercise-container">
                     <img className='logo' src={logo} alt="" />
                    <h3>Select Today's Exercise</h3>
                    <div className="single-exercise">
                    {
                        gyms.map(gym => <Exercise
                            key={gym.id}
                            gym={gym}
                            handleAddToCart={handleAddToCart}
                        ></Exercise>)
                    }
                    </div>
                    <Question></Question>
                </div>
                <div className="exercise-about">
                    <ExerciseDetails cart={cart}></ExerciseDetails>
                </div>
        </div>
    );
};

export default Workout;