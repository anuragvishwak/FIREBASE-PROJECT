import React from 'react'
import { useState,useEffect } from 'react';
import { db } from './firebaseConfig';
import Navbar from './Navbar';
import { collection, getDocs } from "firebase/firestore";
import img1 from './south indian.jpeg'
import img2 from './img84619.1426x713.jpg'
import { Link } from 'react-router-dom';

function Breakfast() {
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
      const dinnerRecipes = multipleArray.filter(recipe => recipe.category === 'BREAKFAST');
      console.log(dinnerRecipes)
    setdata(dinnerRecipes);
      }
  
    return (
    <>
      <Navbar/>
        <div className='flex justify-center '>
  <p className='text-8xl italic  text-black font-serif'>BREAKFAST RECIPES</p>
     </div>
    
<div className="flex justify-center mt-1 mb-10">
        <img src={img1} width={760} height={500} />
        <img src={img2} width={760} height={500} />
      </div>

   

      <div className='bg-[#d3065f] ml-20 mr-20 rounded-2xl p-1'>
      <div className="ml-10  mr-10  grid grid-cols-4">
      {data.map((recipe) => (
        <div className="flex mt-1 justify-center p-3  " key={recipe.id}>
          <div className="bg-white hover:shadow-indigo-500/40 shadow-xl rounded-xl p-3">
          <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}> 
          <img
          className="h-56 w-72 rounded-md"
            src={recipe.recipeImage}/>
            </Link>
            
          <h3 className="text-3xl font-bold  text-[#d3065f]"> {recipe.recipeName}</h3>
          <p className="text-[grey] font-serif italic font-bold">{recipe.category}</p>
          <p className='text-[grey] font-serif italic font-bold'>{recipe.cuisine}</p>
  
          </div>
        </div>
      ))} 
    </div>
      </div>
    </>
    )
}

export default Breakfast

