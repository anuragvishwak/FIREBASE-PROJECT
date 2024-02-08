import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import './App.css'
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function AuthenticationSignUp() {
    const auth = getAuth();
    navigate("/")
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
    <div className="container1">
    <h1 className="desingingHeader">WECOME TO RECIPE APP</h1>
    <h2 className="desingingHeader">LOGIN</h2>

    <div className="centering">

    <label>NAME:</label>
    <div>
   <input
      type="email"
      className="inputField1"
      onChange={(event1) => setEmail(event1.target.value)}
    ></input>
   </div>
      
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

    <button className="button2" onClick={AuthenticationSignUp}>signup</button>

    </div>
</div>  
  );
}

export default SignUp;
