import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login";
import SignUp from "./SignUp";
import Home from "./Home";
import RecipeCollection from "./RecipeCollection";
import AddRecipies from "./AddRecipies";
import DetailedDescription from "./DetailedDescription";
import Chinese from "./Chinese";
import Pujabi from "./Pujabi";
import SouthIndian from "./SouthIndian";
import Maharastrian from "./Maharastrian";
import Breakfast from "./Breakfast";
import FastFood from "./FastFood";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [userName,setUserName]=useState(null);
  
  return (
        
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp setUserName={setUserName} />} />
            <Route path="/Home" element={<Home userName={userName}/>} />
            <Route path="/RecipeCollection" element={<RecipeCollection/>}/>
            <Route path="/AddRecipies" element={<AddRecipies/>}/>
            <Route path="/detailedDescription/:id" element={<DetailedDescription/>} />
            <Route path="/Chinese" element={<Chinese/>}/>
            <Route path="/Pujabi" element={<Pujabi/>}/>
            <Route path="/SouthIndian" element={<SouthIndian/>}/>
            <Route path="/Maharastrian" element={<Maharastrian/>}/>
            <Route path="/Breakfast" element={<Breakfast/>}/>
            <Route path="/Lunch" element={<Lunch/>}/>
            <Route path="/FastFood" element={<FastFood/>}/>
            <Route path="Dinner" element={<Dinner/>}/>
          </Routes>
     
  );
}
export default App;
