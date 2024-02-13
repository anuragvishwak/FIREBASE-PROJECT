import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "./firebaseConfig";
import "./App.css";
import Img1 from "./foods_to_eat_to_lose_weight.webp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function AuthenticationSignIn() {
    console.log("ji");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential);
        navigate("/Home");
        return alert("you are successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return alert("signin error");
      });
  }

  return (
    <div className="container">
      <div>
        <img className="imaging" src={Img1} height={400} width={500} />
      </div>
      <div>
        <h1 className="designingHeader">WECOME TO RECIPE APP</h1>
        <h2 className="designingSecondHeader">LOGIN</h2>

        <div className="centering">
          <div className="inputContent">
            <label className="adjustingContent">E-MAIL:</label>
            <div>
              <input
                type="email"
                className="inputField"
                onChange={(event1) => setEmail(event1.target.value)}
              ></input>
            </div>

            <label>PASSWORD:</label>
            <div>
              <input
                type="password"
                className="inputField"
                onChange={(event2) => setPassword(event2.target.value)}
              ></input>
            </div>
          </div>

          <button className="button2" onClick={AuthenticationSignIn}>
            Login
          </button>
        </div>
        <h4 className="alreadyExistingAccount">
          don't have an account?
          <Link className="signingUp" to="/SignUp">
            signup
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Login;
