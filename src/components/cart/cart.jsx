
import React from "react";

const Cart = ({cart, handleRemoveFromCart}) => {
    
    return (
        <div className="flex gap-4 border-2 mt-20 p-2 bg-pink-50">
            {
               cart.map(Bottle=><div className="w-20 h-40 border-2 rounded-md flex flex-col items-center justify-between p-2  " key={Bottle.id}>
           <img className="w-full h-24 object-cover rounded-md" src={Bottle.img}></img>
                 <button onClick={()=>handleRemoveFromCart(Bottle.id)} className=" bg-pink-100 py-1 w-full text-red-700">X</button>
               </div>) 
            }
        </div>
    );
};

export default Cart;