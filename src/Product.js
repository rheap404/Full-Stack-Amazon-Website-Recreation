import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
 

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] =useStateValue();

    const addToBasket=() => {
        //dispatch item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };

      const data = {id:id, title:title, image:image, price:price, rating:rating};

  return (
    <div className='product'>
        <div className='product_info'>

        <Link to= {`/productInfo/${title}`} state={data} style={{ textDecoration: 'none' }}>
            <p>{title}</p>
        </Link>
                
           

            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>(
                     <p>⭐️</p>
                ))}
               
            </div>

        </div>

        <img src={image}/>
        
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product