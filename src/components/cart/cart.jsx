
import React from "react";

const Cart = ({cart}) => {
    
    return (
        <div className="flex gap-4 border-2 mt-20 p-2 bg-pink-50">
            {
               cart.map(Bottle=><div className="w-20 border-2 rounded-md   " key={Bottle.id}>
           <img src={Bottle.img}></img>
           
               </div>) 
            }
        </div>
    );
};

export default Cart;