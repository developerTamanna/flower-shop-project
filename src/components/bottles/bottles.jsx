import React, { use } from 'react';
import Bottle from '../bottle/bottle';
const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    console.log(bottles)
    return (
        <div  >
           <div className='border-2 p-5 mt-20 rounded-xl w-40'>
           <h3 className='text-2xl font-semibold text-blue-800'>Bottles:{bottles.length}</h3>
           </div>

          <div className='grid grid-cols-3 gap-5 mt-20'>
          {
                bottles.map(bottle=>
                <Bottle bottle={bottle}
                 key={bottle.id}>

                </Bottle>)
             }
          </div>
        </div>
    );
};

export default Bottles;