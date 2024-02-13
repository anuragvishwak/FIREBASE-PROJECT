import React, { useEffect, useState } from "react";
import "./recipe.css";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Link } from "react-router-dom";


function RecipeCollection() {

  const [data, setdata] = useState([]);

 useEffect( 
   async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Add Recipes"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setdata(multipleArray);
    console.log(multipleArray);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
},[])
    

  return (
  <>
    <Navbar/>
    <div>
      <input className="searchbar" placeholder="FIND RECIPES"></input>
      <button className="searchButton">
        <FaSearch size={17} />
      </button>

      <div className="designingBody"></div>
      <h1 className="designingHeadering">WELCOME TO THE RECIPE COLLECTION</h1>
      {/* Map over data and render each recipe */}
    <div className="grid-container">
   {data.map((recipe, recipeName) => (
        <div key={recipeName.id} className="designingRecipe">
          {console.log(recipe.recipeImage)}
          <img className="recipeImage" src={recipe.recipeImage} height={100} width={200} alt={recipe.recipeName} />
           <h3 className="heading3"> NAME: {recipe.recipeName}</h3>
        
        </div>
      ))}
     
    </div>
    </div>
  </>
  ); 
}

export default RecipeCollection;
