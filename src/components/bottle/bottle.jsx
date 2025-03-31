import React from 'react';

const Bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price, stock} =bottle
    // console.log(bottle)
    return (
        <div className='border-2 border-green-500 p-5 rounded-2xl h-[350px] flex flex-col'>
            <img className='w-full h-40 object-cover rounded-lg' src={img} alt=""></img>
            <p className='text-sm font-bold border-2 border-pink-100 text-center rounded-lg bg-pink-50 mt-2 p-1'>name: {name}</p>
            <h6 className='font-bold text-gray-500 mt-auto'> price: {price}</h6>
            <small className='font-bold text-gray-400'> {stock} remaining</small>
            <button onClick={()=>handleAddToCart(bottle)} className='mt-4'>Buy Now</button>
        </div>
    );
};

export default Bottle;