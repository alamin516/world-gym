import React from 'react';
import './Exercise.css'

const Exercise = ({gym, handleAddToCart}) => {
    const {name, img, description, time} = gym;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="exercise-info">
                <h6 className='exercise-name'>{name}</h6>
                <p style={{marginBottom: "20px"}}>{description.slice(0, 100)}...</p>
                <p><small>Required Time: {time}s</small></p>
            </div>
            <button onClick={() => handleAddToCart(gym)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
            </button>
        </div>
    );
};

export default Exercise;