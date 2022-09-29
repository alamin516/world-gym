import React from 'react';

const BreakTime = (props) => {
    const {addBreaks} = props;

    let newBreakTime = addBreaks;
    return (
        <div>
            <p>{newBreakTime ? newBreakTime : 0} seconds</p>
        </div>
    );
};

export default BreakTime;