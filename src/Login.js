import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {auth} from './firebase';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail]= useState(' ');
    const [password, setPassword]= useState(' ');

    const signIn = e => {
        e.preventDefault();

       auth
        .signInWithEmailAndPassword(email.trim(), password)
        .then(auth=> {
            navigate('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'/>
        </Link>
        
        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login_signInButton'>Login</button>

            </form>

            <p>
                By signing-in you agree to Amazon's Condidtion of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice
            </p>

            <p>
                <small>New to Amazon?</small>
            </p>

            <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>

        </div>
    </div>
  )
}

export default Login