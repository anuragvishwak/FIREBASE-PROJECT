import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { app } from "./firebaseConfig";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Img1 from "./foods_to_eat_to_lose_weight.webp";
import { db } from "./firebaseConfig";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [name, setname] = useState("");
  const [phoneNo, setPhoneNo]  = useState("");
 

  
  const navigate = useNavigate();

  function AuthenticationSignUp() {
    const auth = getAuth();
    try {
      const docRef = addDoc(collection(db, "user details"), {
        name: name,
        email: email,
        password: password,
        phoneNo: phoneNo,
        username: userName
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("you have successfully created your account😁");
      navigate('/')
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wrong! Try again later. 🥲");
    }
    
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
  };
  


  
  return (
    <div className="container1">
      <div>
        <img className="imaging" src={Img1} height={490} width={580} />
      </div>
      <div>
        <h2  className="designingHeader">WECOME TO RECIPE APP</h2>
        <h3 className="designingSecondHeader">Sign Up</h3>

        <div className="centering">
          <label>FULL NAME:</label>
          <div>
            <input
              type="text"
              className="inputField1"
              onChange={(event3) => setname(event3.target.value)}
            ></input>
          </div>

          <label>PHONE NO:</label>
          <div>
            <input
              type="text"
              className="inputField1"
              onChange={(event4) => setPhoneNo(event4.target.value)}
            ></input>
          </div>

          <label>USERNAME:</label>
          <div>
            <input
              type="text"
              className="inputField1"
              onChange={(event5) => setuserName(event5.target.value)}
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
