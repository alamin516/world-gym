import React from 'react';
import aboutMe from '../../images/alamin.jpg';
import './ExerciseDatails.css'

const ExerciseDetails = () => {

    const addBreakItems = [10, 20, 30, 40, 50];

    return (
        <div className='exercise-details'>
            <div className='about-me'>
                <img src={aboutMe} alt="" />
                <div>
                    <h3>Md Alamin</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="about-bio">
                <div>
                    <h3>64</h3><span><small> Kg</small></span>
                    <h4>Weight</h4>
                </div>
                <div>
                    <h3>5.8</h3>
                    <h4>Height</h4>
                </div>
                <div>
                    <h3>26</h3><span><small> yrs</small></span>
                    <h4>Age</h4>
                </div>
            </div>
            <div className='add-break'>
                <h3>Add A Break</h3>
                <div className="break-items">
                    {
                        addBreakItems.map(addBreakItem => <button className='break-btn'>{addBreakItem}s</button>)
                    }
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <h4>Exercise time</h4>
                    <p>200 seconds</p>
                </div>
                <div className='break-time'>
                    <h4>Break time</h4>
                    <p>30 seconds</p>
                </div>
            </div>
            <button className='complete-btn'>
                Activity Completed
            </button>

        </div>
    );
};

export default ExerciseDetails;