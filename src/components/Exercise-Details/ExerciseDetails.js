import React from 'react';
import aboutMe from '../../images/alamin.jpg';
import './ExerciseDatails.css'

const ExerciseDetails = () => {
    return (
        <div className='exercise-details'>
            <div className='about-me'>
                <img src={aboutMe} alt="" />
                <div>
                    <h3>Md Alamin</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;