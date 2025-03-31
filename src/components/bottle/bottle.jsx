import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle)
    return (
        <div className='border-2 border-green-500 p-5 rounded-2xl'>
            <img src={bottle.img} alt=""></img>
        </div>
    );
};

export default Bottle;