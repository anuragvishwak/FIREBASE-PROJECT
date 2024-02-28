import React from 'react'
import { useState,useEffect } from 'react';
import { db } from './firebaseConfig';
import Navbar from './Navbar';
import { collection, getDocs } from "firebase/firestore";
import img1 from './8143492351_9a0a239384_b.jpg'
import img2 from './Indian-lunch-ideas-58.jpg'
import { Link } from 'react-router-dom';


function Lunch() {
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
      const filteringLunch = multipleArray.filter(recipe => recipe.category === 'LUNCH'); 
      console.log(filteringLunch)
      setdata(filteringLunch);
    
      }
      
    return (
    <>
      <Navbar/>
        <div className='flex justify-center '>
  <p className='text-8xl italic  text-black font-serif'>LUNCH RECIPES</p>
     </div>
     <div className='flex justify-center mt-1 mb-10'>
     <img src={img1} width={760} height={500}/>
     <img src={img2} width={760} height={500}/>
     </div>
  
        <p className='bg-[#99dbe1] p-2 text-white text-center mb-10 font-bold italic text-2xl'>Lunch is an essential meal that provides the necessary energy and nutrients to sustain us through the remainder of the day. It serves as a crucial refueling opportunity, replenishing our bodies and minds after a busy morning.</p>

      <div className='bg-[#ECB159] ml-20 mr-20 rounded-2xl'>
      
      <div className="ml-10  mr-10 grid grid-cols-4">
      {data.map((recipe) => (
        <div className="flex mt-1  justify-center p-3" key={recipe.id}>
          <div className="bg-white rounded-xl p-3">
        <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}>
          <img
          className="h-56 w-72 rounded-md"
            src={recipe.recipeImage}/>
            </Link>
          <h3 className="text-3xl font-bold  text-[#ECB159]"> {recipe.recipeName}</h3>
          <p className="text-[grey] font-serif italic font-bold">{recipe.category}</p>
          <p className='text-[grey] font-serif italic font-bold'>{recipe.cuisine} Cuisine</p>
        <p className='text-[grey] font-serif italic font-bold'>{recipe.recipeTime}</p>
     <div className="text-[grey] font-serif italic font-bold">Posted By - {recipe.postedBy}</div>
          
          </div>
        </div>
      ))} 
    </div>
      </div>
    </>
    )
}

export default Lunch