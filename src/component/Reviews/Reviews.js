import React from 'react';
import { LaptopReviewHook } from '../../Hooks/LaptopReviewHook';

const Reviews = () => {
   const [carts,setCart] =LaptopReviewHook()
    return (
        <div>
            
            <div className='cart-container'>
             
             <h1>Customer Review ({carts.length}) </h1>

     

            {
                carts.map(cart=>
                 <p  cart={cart.name} discrap={cart.discription}>
                        Name: {cart.name} <br/>
                        Discription:{cart.discription}<br/>
                         Rating:{cart.Rating}

                </p>)
            }
                     
             
         </div>
             

        </div>
    );
};

export default Reviews;