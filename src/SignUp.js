import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { app, auth } from "./firebaseConfig";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Img1 from "./Dish-PNG-High-Quality-Image.png";
import { db } from "./firebaseConfig";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [name, setname] = useState(null);
  const [phoneNo, setPhoneNo] = useState("");
  const auth = getAuth();
  console.log(auth?.currentUser);

  const navigate = useNavigate();

  function AuthenticationSignUp() {
    try {
      const docRef = addDoc(collection(db, "user details"), {
        name: name,
        email: email,
        password: password,
        phoneNo: phoneNo, 
        username: userName,
      });
      toast.success("you have successfully created your account😁");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wrong! Try again later. 🥲");
    }
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      setEmail(email);
      localStorage.setItem("email", email);
      navigate("/");
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    console.log(name);
  return (
    <div className="bg-gradient-to-r from-[#8CB9BD] to-[#ECB159] min-h-screen">
      <div className=" flex items-center justify-center">
        <div className="flex mt-40 p-3 rounded-3xl w-9/10 h-1/12 bg-[#ffffff] bg-opacity-40 shadow-lg">
          <div>
            <img src={Img1} height={410} width={410} />
          </div>
          <div>
            <h2 className="text-[#B67352] font-bold mb-4 text-3xl ">
              WECOME TO RECIPE APP
            </h2>
            <h3 className="mb-4 font-bold text-2xl text-center">Sign Up</h3>

            <div>
              <div className="flex justify-center mb-4">
                <label>FULL NAME:</label>
                <input
                  type="text"
                  className="border-[#8CB9BD] outline-none rounded-xl ml-11 border-2"
                  onChange={(event3) => setname(event3.target.value)}
                ></input>
              </div>

              <div className="flex justify-center mb-4">
                <label>PHONE NO:</label>
                <input
                  type="text"
                  className="border-[#8CB9BD] outline-none rounded-xl ml-11 border-2"
                  onChange={(event4) => setPhoneNo(event4.target.value)}
                ></input>
              </div>

              <div className="flex justify-center mb-4">
                <label>USERNAME:</label>
                <input
                  type="text"
                  className="border-[#8CB9BD] outline-none rounded-xl ml-11 border-2"
                  onChange={(event5) => setuserName(event5.target.value)}
                ></input>
              </div>

              <div className="flex justify-center mb-4">
                <label className="mr-3">E-MAIL:</label>

                <input
                  type="email"
                  className="border-[#8CB9BD] outline-none rounded-xl ml-16 border-2"
                  onChange={(event1) => setEmail(event1.target.value)}
                ></input>
              </div>

              <div className="flex justify-center mb-4">
                <label>PASSWORD:</label>
                <input
                  type="password"
                  className="border-[#8CB9BD] outline-none rounded-xl ml-11 border-2"
                  onChange={(event2) => setPassword(event2.target.value)}
                ></input>
              </div>

              <button
                className=" bg-[#ECB159] font-bold p-2 rounded-md text-white ml-36"
                onClick={AuthenticationSignUp}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
