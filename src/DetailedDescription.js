import { useParams } from "react-router-dom";
import React from "react";
import { db } from "./firebaseConfig";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";
import { FaClock } from "react-icons/fa6";


function DetailedDescription() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [data, setdata] = useState([]);

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

  useEffect(() => {
    Calling();
  }, []);

  async function Calling() {
    const querySnapshot = await getDocs(collection(db, "user details"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
 
    const gettingName = multipleArray.filter(data => (data.email === localStorage.getItem('email')))     
    console.log(gettingName);
    
    setdata(gettingName);
   
  }

  return (
    <>
      <Navbar />
      <p className="text-center text-4xl text-[#ECB159] font-bold italic mt-5">
        Complete Recipe Description...
      </p>
      {recipe && (
        <div
          className="flex mt-5 ml-60 mr-60 p-3"
          key={recipe.id}
        >
          <div className="rounded-bl-3xl rounded-tr-3xl p-3">
            <div className="flex">
              <img className="h-60 w-96 ml-3 rounded-sm" src={recipe.recipeImage} />

             <div className="flex flex-col items-center ml-10">
             <div>
                <p className="text- text-7xl text-[#ECB159] font-serif italic font-bold">
                  {recipe.recipeName}
                </p>
              </div>

              <div className="mt-1">
                <p className="text-[grey] text-xl font-serif italic font-bold">
                  Category: {recipe.category}
                </p>
                <p className="text-[grey] text-xl font-serif italic font-bold">
                  Cuisine: {recipe.cuisine}
                </p>  
          
              </div>
            <div className="flex text-white">
            <p className="text-[grey] text-xl font-serif italic font-bold mr-1 ">Time Required -</p>
            <FaClock className="mt-1 mr-2"/><p className="font-serif italic font-bold">
                      {recipe.recipeTime}mins
                    </p>
            </div>
     <div className="text-[grey] text-xl font-serif italic font-bold">Posted By - {recipe.postedBy}</div>
             </div>
            
            </div>  

            <p className="text-[grey] mt-3 pl-3 pr-3 font-serif italic text-justify">
              {recipe.recipeDescription}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailedDescription;
