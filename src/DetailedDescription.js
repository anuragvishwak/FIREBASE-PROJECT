import { useParams } from "react-router-dom";
import React from "react";
import { db } from "./firebaseConfig";
import { useState,useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";

function DetailedDescription() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "Add Recipes"));
      const multipleArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const selectedRecipe = multipleArray.find((recipe) => recipe.id === id);
      setRecipe(selectedRecipe);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="ml-10 mr-10 grid grid-cols-4">
        {recipe && (
          <div className="flex mt-1 justify-center p-3" key={recipe.id}>
            <div className="bg-white rounded-xl p-3">
              <img className="h-56 w-72 rounded-md" src={recipe.recipeImage} alt={recipe.recipeName} />
              <h3 className="text-3xl font-bold text-[#ECB159]">{recipe.recipeName}</h3>
              <p className="text-[grey] font-serif italic font-bold">{recipe.category}</p>
              <p className="text-[grey] font-serif italic font-bold">{recipe.cuisine}</p>
              <p className="text-[grey] font-serif italic text-justify">{recipe.recipeDescription}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailedDescription;
