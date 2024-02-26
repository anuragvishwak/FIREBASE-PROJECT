import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app, auth } from "./firebaseConfig";
import "./App.css";
import Img1 from "./Dish-PNG-High-Quality-Image.png";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function AuthenticationSignIn() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // localStorage.setItem('userName', userCredential.user.displayName);
        // const user = userCredential.user;
        setEmail(email);
        localStorage.setItem("email", email);
        console.log(userCredential);
        navigate("/Home");
        toast.success("you have logged-in succesfully 😁");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("SIGN ERROR! 😢");
      });
  }

   console.log(auth)
  return (
    <div className="bg-gradient-to-r from-[#8CB9BD] to-[#ECB159] min-h-screen">
      <div className=" flex items-center justify-center">
        <div className="flex mt-40 p-3 rounded-3xl h-85 bg-[#ffffff] bg-opacity-40 shadow-lg">
        <img src={Img1} height={410} width={410}/>
          <div className=" rounded-3xl p-4 ">
            <div>
              <h1 className="text-[#B67352] font-bold mb-4 text-3xl text-center">WECOME TO RECIPE APP</h1>
              <h2 className="mb-4 text-[#B67352 ] font-bold text-2xl text-center">LOGIN</h2>

              <div>
                <div>
                   <div className=" mb-4 flex justify-center">
                  <label>E-MAIL:</label>
                    <input
                      className="border-[#8CB9BD] outline-none rounded-xl ml-11 border-2"
                      type="email"
                      onChange={(event1) => setEmail(event1.target.value)}
                    ></input>
                  </div>

                 <div className="flex justify-center">
                  <label>PASSWORD:</label>
                    <input
                      className="border-[#8CB9BD] outline-none rounded-xl ml-3 border-2"
                      type="password"
                      onChange={(event2) => setPassword(event2.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="mt-5 mb-7 flex justify-center">
                  <button
                    className=" bg-[#ECB159] font-bold p-2 rounded-md text-white"
                    onClick={AuthenticationSignIn}>
                    Login
                  </button>
                 
                </div>
              </div>
                      
              <h4 className="flex justify-center">
                don't have an account?
                <Link className="ml-1 font-bold text-[#ECB159]" to="/SignUp">signup</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
