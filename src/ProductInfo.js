import React from 'react'
import './ProductInfo.css';
import { useLocation } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function ProductInfo() {
  const location = useLocation();
  const productInfo = location.state;
    
  const [{basket}, dispatch] = useStateValue();

  const addToBasket=() => {
      //dispatch item to data layer
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: productInfo.id,
              title: productInfo.title,
              image: productInfo.image,
              price: productInfo.price,
              rating: productInfo.rating,
          }
      });
  };

    
  return (
    <div className='productInfo'>
    
        <div className='productInfo_left'>
            <img src= {productInfo.image}/>
        </div>

        <div className='productInfo_right'>
            <p className='productInfo_title'>
                {productInfo.title}
            </p>
            <div className='productInfo_rating'>
                <small>{productInfo.rating}</small>
                {Array(productInfo.rating).fill().map((_,i)=>(
                    <p>⭐️</p>
                ))}    
            </div>

            <hr/>
            <p className='productInfo_price'>${productInfo.price}<br/>

            <small>Inclusive of taxes</small><br/>
            <small>EMI options available</small><br/>

            <button onClick={addToBasket}>Add to Basket</button>
            </p>
            <hr/>

        </div>

        </div>
    )
 }



export default ProductInfo