import React from 'react'
import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import Navbar from './Navbar';
import { collection, getDocs } from "firebase/firestore";
import img1 from './Everyday_Meal_Plate_Channa_Turai_Morkuzhambu.jpg'
import img2 from './misal_in_mumbai_TravellersofIndia-scaled.jpg'
import { Link } from 'react-router-dom';

function Maharastrian() {
  
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
    const filteringMaharastrian = multipleArray.filter(recipe => recipe.cuisine === 'Maharastrian Cuisine')
    setdata(filteringMaharastrian);
    }

  return (
  <>
    <Navbar/>
      <div className='flex justify-center'>
<p className='text-8xl italic  text-black font-serif'>MAHATRASTRIAN CUISINES</p>
   </div>
   <div className='flex justify-center mt-1 mb-10'>
     <img src={img1} width={760} height={500}/>
     <img src={img2} width={760} height={500}/>
     </div>
       
       
     <p className="bg-[#99dbe1] p-2 text-white text-center  font-bold italic text-2xl">"Maharashtrian cuisine: a rich tapestry of flavors, a celebration of spices, and a journey through the vibrant culinary heritage of Maharashtra, where every dish tells a story of tradition and innovation."</p>
    <div className="ml-20 mt-10 mr-20 bg-[#ECB159] grid grid-cols-4">
    {data.map((recipe) => (
      <div className="flex  justify-center p-3  " key={recipe.id}>
        <div className="bg-white rounded-xl p-3">

        <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}> 

        <img
        className="h-56 w-72 rounded-md"
          src={recipe.recipeImage}/>
          </Link>
        <h3 className="text-3xl font-bold  text-[#ECB159]"> {recipe.recipeName}</h3>
        <p className="text-[grey] font-serif italic font-bold">{recipe.category}</p>
        <p className='text-[grey] font-serif italic font-bold'>{recipe.cuisine}</p>
        <p className='text-[grey] font-serif italic font-bold'>{recipe.recipeTime}mins</p>
     <div className="text-[grey] font-serif italic font-bold">Posted By - {recipe.postedBy}</div>

        </div>
      </div>
    ))} 
  </div>
  </>
  )
}

export default Maharastrian