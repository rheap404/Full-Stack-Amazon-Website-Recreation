 
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Payment from './Payment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



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

      <Route path='/payment' element={[<Header/>, <Payment/>]}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
      <Route path='/' element={[<Header/>,<Home/>]}/>
          
        
      </Routes>
       
     </div>
   </Router>

  );
}

export default App;
