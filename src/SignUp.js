import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Img1 from "./foods_to_eat_to_lose_weight.webp";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function AuthenticationSignUp() {
    const auth = getAuth();
    navigate("/");
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
      <div>
        <img className="imaging" src={Img1} height={420} width={500} />
      </div>
      <div>
        <h1 className="designingHeader">WECOME TO RECIPE APP</h1>
        <h2 className="designingSecondHeader">Sign Up</h2>

        <div className="centering">
          <label>NAME:</label>
          <div>
            <input
              type="email"
              className="inputField1"
              onChange={(event1) => setEmail(event1.target.value)}
            ></input>
          </div>
          <label className="adjustingContent">E-MAIL:</label>
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
              onChange={(event2) => setPassword(event2.target.value)}
            ></input>
          </div>

          <button className="centeringButton" onClick={AuthenticationSignUp}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
