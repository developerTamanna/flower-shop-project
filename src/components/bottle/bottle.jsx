import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle)
    return (
        <div className='border-2 border-green-500 p-5 rounded-2xl'>
            <img src={bottle.img} alt=""></img>
            <p className='text-xm font-bold'>name: {bottle.name}</p>
            <small className='font-bold text-gray-500'> price: {bottle.price}</small>
        </div>
    );
};

export default Bottle;