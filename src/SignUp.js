import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import './App.css'
function SignUp() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function AuthenticationSignUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div>
      <div className="container">
        <div>
        <label>EMAIL:</label>
          <input
          className="inputfield1" 
          placeholder="example@gmail.com"
          type="email"
          onChange={(event1)=> setEmail(event1.target.value)}></input>

        </div>
          <div>
          <label>password:</label>
          <input
          type="password" 
          placeholder="example123"
          className="inputfield2"
          onChange={(event2)=> setPassword(event2.target.value)}></input>
           <div>
           <button onClick={AuthenticationSignUp}>signUp</button>
           </div>
          </div>
      </div>
    </div>
  );
}

export default SignUp;
