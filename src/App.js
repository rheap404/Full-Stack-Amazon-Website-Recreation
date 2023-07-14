 
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import Payment from './Payment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51NTP3fC9zrWgPfTW7Kac7WwqfgWAbPqikDfgyzUkJPFbKixsCdzIIhOUEZYEINYOzLrB3qP2lcG2Uesw5btirv0o00DYYoeKmS');

function App() {

  const [ {}, dispatch ] = useStateValue();

  useEffect (() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged(authUser=> {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // user just logged in/ user was logged in
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
       }
      else {
        // the user logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
        }
      
    })
  }, [])

  return (
   <Router>
     <div className="app">
      
      <Routes>

      <Route path='/payment' element={[<Header/>, 
       <Elements stripe={promise}>
        <Payment/>
       </Elements>]}/>
      
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
      <Route path='/' element={[<Header/>,<Home/>]}/>
          
        
      </Routes>
       
     </div>
   </Router>

  );
}

export default App;
