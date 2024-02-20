import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaSearch } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Link } from "react-router-dom";

function RecipeCollection() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    Calling();
  }, []);
  async function Calling() {
    const querySnapshot = await getDocs(collection(db, "Add Recipes"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setdata(multipleArray);
  }

  return (
    <>
      <div>
        <Navbar />

        <div className="flex mb-10 mt-6 p-1   ml-10 mr-10">
          <h1 className=" text-5xl flex font-bold  text-[#ECB159] ml-10 mr-36">
            WELCOME TO THE RECIPE COLLECTION
          </h1>
          <input
            className=" border-[#ECB159] text-center w-60 border-2 rounded-full"
            placeholder="FIND RECIPES...."
          ></input>
          <button className="ml-2 text-[#ECB159]">
            <FaSearch size={25} />
          </button>
        </div>

        <div
          className="bg-[#ECB159] p-5 rounded-xl ml-10 mr-10 mt-1"
          
        >
          <div className="gap-7 p-5 grid grid-cols-4">
            
              {data.map((recipe) => (
                <div className=" flex" key={recipe.id}>
                  <div className="bg-white p-4 rounded-xl">
                  <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}> 
                    <img
                      className="h-56 w-72 rounded-md"
                      src={recipe.recipeImage}
                    />
                     </Link>
                    <h3 className="text-3xl font-bold  text-[#ECB159]">
                      {" "}
                      {recipe.recipeName  }
                    </h3>
                    <p className="text-[grey] font-serif italic font-bold">
                      {recipe.category}
                    </p>
                    <p className="text-[grey] font-serif italic font-bold">
                      {recipe.cuisine}
                    </p>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>
     
    </>
  );
}

export default RecipeCollection;
