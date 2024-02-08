import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "./firebaseConfig";
import "./App.css";
import SignUp from "./SignUp";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function AuthenticationSignIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return alert("you are successfully logged in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return alert("signin error");
      });
  }

  return (
    <div className="container">
      <h1 className="desingingHeader">WECOME TO RECIPE APP</h1>
      <h2 className="desingingHeader">LOGIN</h2>

      <div className="centering">
        
  <label>E-MAIL:</label>
      <div>
     <input
        type="email"
        className="inputField1"
        onChange={(event1) => setEmail(event1.target.value)}
      ></input>
     </div>
     
      <label>PASSWORD:</label>
       <div>
       <input
        type="password"
        className="inputField2"
        onChange={(event2) => setPassword(event2.target.value)}>
      </input>
       </div>

      <button className="button2" onClick={AuthenticationSignIn}>Login</button>
      </div>
      <h4 className="alreadyExistingAccount">don't have an account? 
          <Link className="signingUp" to='/SignUp'>signup</Link>
        </h4>
</div>  
  );
}

export default Login;
