import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succceded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    
    // useEffect(() => {
    //     // Generates a special stripe secret wich allows us to charge the customer
    //     // A new secret is required any time the basket is updated
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             url: `/payments/create?total= ${getBasketTotal(basket)*100}`
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }

    //     getClientSecret();
    // }, [basket])


    useEffect(() => {
        // Generates a special stripe secret which allows us to charge the customer
        // A new secret is required any time the basket is updated
        const getClientSecret = async () => {
          try {
            const response = await axios.post('/payments/create', {
              total: getBasketTotal(basket) * 100
            });
            setClientSecret(response.data.clientSecret);
          } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error fetching client secret:', error);
          }
        };
      
        getClientSecret();
      }, [basket]);


    const stripe= useStripe();
    const elements = useElements();
    const navigate= useNavigate();

    // const handleSubmit=  async (event) => {
    //     event.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then( ({paymentIntent}) => {
    //         //paymentIntent= payment confirmation
    //         setSucceded(true);
    //         setError(null);
    //         setProcessing(false);

           
    //         navigate('.../orders', {replace:true});

    //     })
        
    // }  
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
    
        try {
          const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)
            }
          });
    
          if (error) {
            // Handle payment confirmation error
            setError(error.message);
            setSucceded(false);
          } else {
            // Payment is successful
            setSucceded(true);
            

            dispatch ({
                type: 'EMPTY_BASKET'
            })

            setError(null);
            navigate('/orders', { replace: true });

          }
        } catch (error) {
          console.error(error);
          setError("An error occurred while processing the payment");
          setSucceded(false);
        }
        setProcessing(false);
    };








    const handleChange= event => {
        // Listen for changes and display any errors
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    } 

  return (
    <div className='payment'>
        <div className='payment_container'>

            <h1>
                Checkout ( <Link to='/checkout'>{basket?.length} items</Link> )
            </h1>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>139.2, Central Village</p>
                        <p>Woodhouse Lane, Leeds, LS2 3AE</p>
                    </div>

                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3> Payment Method</h3>
                </div>
                <div className='payment_details'>

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment_price'>
                                <CurrencyFormat
                                   renderText={(value) => (
                                    <h3> Order Total: {value}</h3>
                                   )}
                                   decimalScale={2}
                                   value={getBasketTotal(basket)}
                                   displayType={'text'}
                                   thousandSeparator={true}
                                   prefix='$'
                                />

                                <button disabled={processing || disabled || succceded} >
                                    <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Payment