import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login";
import SignUp from "./SignUp";
import Home from "./Home";
import RecipeCollection from "./RecipeCollection";
import AddRecipies from "./AddRecipies";
function App() {
  return (
    <div className="main-container">  
      
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/RecipeCollection" element={<RecipeCollection/>}/>
            <Route path="/AddRecipies" element={<AddRecipies/>}/>
          </Routes>
        
    </div>
  );
}
export default App;
