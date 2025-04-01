import React, { use, useEffect, useState } from 'react';
import Cart from '../cart/cart';
import Bottle from '../bottle/bottle';
import { addToStoreCart, getStoreCart } from '../../utilities/localstorage';
const Bottles = ({bottlesPromise}) => {
 

    // cart++
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);



// useEffect

useEffect(()=>{
    const storedCartIds = getStoreCart()
    // console.log(storedCartIds, bottles)
   const storedCart =[]

    for(const id of storedCartIds){
        console.log(id)
        const cartBottle = bottles.find(bottle=> bottle.id===id);
        if(cartBottle){
            storedCart.push(cartBottle)
        }
        console.log('stored cart', storedCart)
        setCart(storedCart)
    }
},[bottles])




   const handleAddToCart =(bottle)=>{
    // console.log('button clicked', bottle)
    const newCart = [...cart, bottle]
    setCart(newCart)

    //save the bottle id in the storage
    addToStoreCart(bottle.id)
   }


   const handleRemoveFromCart =id=>{
         console.log('remove item fromm the card', id)
         const remainingCart =cart.filter(bottle => bottle.id !==id)
         setCart(remainingCart)
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

           <div>
           <Cart cart={cart} handleRemoveFromCart ={handleRemoveFromCart}>
            
           </Cart>
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