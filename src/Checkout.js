import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>

            <img className='checkout_ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg'/> 

            <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>
            </div>


        </div>

        <div className='checkout_right'>
            <Subtotal/>

        </div>


    </div>
  )
}

export default Checkout 