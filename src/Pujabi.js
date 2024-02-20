import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import Navbar from "./Navbar";
import { collection, getDocs } from "firebase/firestore";
import img1 from "./fvgmbvcb061h2agtnixl.webp";
import img2 from "./punjabi-food-1200x900-1.jpg";

function Pujabi() {
  const [data, setdata] = useState([]);
  
  async function Calling() {
    const querySnapshot = await getDocs(collection(db, "Add Recipes"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Filter recipes with category "BREAKFAST"
    const filteredData = multipleArray.filter(
      (recipe) => recipe.cuisine === "Punjabi Cuisine"
    );
    console.log(filteredData);

    setdata(filteredData);
   
  }

  useEffect(() => {
    

    // Call the async function
    Calling();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <p className="text-8xl italic  text-black font-serif">
          PUNJABI CUISINES
        </p>
      </div>

      <div className="flex justify-center  mb-10">
        <img src={img1} width={760} height={500} />
        <img src={img2} width={760} height={500} />
      </div>
 
         <p className="bg-[#99dbe1] p-2 text-white text-center mb-10 font-bold italic text-2xl">Punjabi cuisine is known for its richness and depth of flavor. From creamy curries to spicy tandoori dishes, Punjabi food delights the taste buds with its bold and robust flavors.</p>

      <div className="bg-[#ECB159] ml-20 mr-20 rounded-2xl">
        <p className="text-center italic text-3xl font-[700] text-white">
          Enjoy your lunch with these delicious lunch recipes!
        </p>
        <div className="ml-10 rounded-xl mr-10  grid grid-cols-4">
          {data.map((recipe) => (
            <div className="flex justify-center p-3  " key={recipe.id}>
              <div className="bg-white rounded-xl p-3">
                <img
                  className="h-56 w-72 rounded-md"
                  src={recipe.recipeImage}
                />
                <h3 className="text-3xl font-bold  text-[#ECB159]">
                  {" "}
                  {recipe.recipeName}
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
    </>
  );
}

export default Pujabi;