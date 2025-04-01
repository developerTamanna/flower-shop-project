import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import { addToStoreCart, getStoreCart } from '../../utilities/localstorage';
const Bottles = ({bottlesPromise}) => {
 

    // cart++
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);



// useEffect

useEffect(()=>{
    const storedCartIds = getStoreCart()
    console.log(storedCartIds)
},[])




   const handleAddToCart =(bottle)=>{
    // console.log('button clicked', bottle)
    const newCart = [...cart, bottle]
    setCart(newCart)

    //save the bottle id in the storage
    addToStoreCart(bottle.id)
   }



    

    // console.log(bottles)
    return (
        <div  >
           <div className='border-2 p-5 mt-20 rounded-xl w-40'>
           <h3 className='text-2xl font-semibold text-blue-800'>Bottles:{bottles.length}</h3>
           </div>
           <div className='border-2 p-5 mt-20 rounded-xl w-40'>
           <h3 className='text-xl font-semibold text-blue-800'>Added to cart:{cart.length}</h3>
           </div>

          <div className='grid grid-cols-3 gap-5 mt-20'>
          {
                bottles.map(bottle=>
                <Bottle bottle=
                {bottle}
                 key={bottle.id}
                 handleAddToCart={handleAddToCart}
                 >

                </Bottle>)
             }
          </div>
        </div>
    );
};

export default Bottles;