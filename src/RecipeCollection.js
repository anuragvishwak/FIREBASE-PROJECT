import React, { useState } from "react";
import "./recipe.css";
import Navbar from "./Navbar";
import { FaSearch, FaSync } from "react-icons/fa";
import { collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";


function RecipeCollection() {

  const [data, setdata] = useState([])
 

   const fetchingData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Add Recipes"));
      const multipleArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setdata(multipleArray);
      console.log(multipleArray)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    
  return (
  <>
    <Navbar/>
    <div>
      <input className="searchbar" placeholder="FIND RECIPES"></input>
      <button onClick={fetchingData} className="searchButton">
        <FaSearch size={17} />
      </button>

      <div className="designingBody"></div>
      <h1 className="designingHeadering">WELCOME TO THE RECIPE COLLECTION</h1>
      {/* Map over data and render each recipe */}
      {data.map((recipe) => (
        <div key={recipe.id} className="designingRecipe">
          <img className="imaging" src={recipe.recipeImage} height={170} width={335} alt={recipe.recipeName} />
           <h3 className="heading3"> NAME: {recipe.recipeName}</h3>
          <div className="description">
            <b className="heading3">DESCRIPTION:</b>
            {recipe.recipeDescription}
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default RecipeCollection;
