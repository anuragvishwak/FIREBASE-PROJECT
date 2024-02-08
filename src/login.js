import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { app } from "./firebaseConfig";
import './App.css'

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function AuthenticationSignIn(){

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return alert('you are successfully logged in')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return alert('signin error')
          });

    }

  return (
    <div className='container'>
        <label>email:</label>
      <input 
      type='email'
      className="inputfield1"
      onChange={(event1)=>setEmail(event1.target.value)}>
      </input>

      <label>password:</label>
      <input
      type='password'
       className="inputfield2"
       onChange={(event2)=>setPassword(event2.target.value)}
      >
      </input>
      
      <button onClick={AuthenticationSignIn}>signIn</button>
    </div>
  )
}

export default Login