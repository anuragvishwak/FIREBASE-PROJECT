import React from 'react'
import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Navbar from './Navbar';
import img1 from './south indian.jpeg'
import img2 from './R.jpeg'
import { Link } from 'react-router-dom';


function SouthIndian() {
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
       const filteringData = multipleArray.filter((recipe) => recipe.cuisine === "South Indian Cuisine");
    setdata(filteringData);
    console.log(filteringData )
    }

  return (
  <>
    <Navbar/>
      <div className='flex justify-center'>
<p className='text-8xl italic  text-black font-serif'>SOUTH INDIAN CUISINES</p>
   </div >
        
     <div className='flex justify-center mb-10'>
     <img src={img1} width={760} height={500}/>
     <img src={img2} width={760} height={500}/>
     </div>

     <p className='bg-[#99dbe1] p-2 text-white text-center mb-10 font-bold italic text-2xl'>South Indian cuisine is characterized by its rich and bold flavors, often achieved through the use of aromatic spices such as mustard seeds, curry leaves, red chillies, and tamarind. Each dish is carefully seasoned to create a harmonious balance of flavors.</p>

   <div className="ml-10  mr-10 mt-4 bg-[#ECB159] rounded-2xl grid grid-cols-4">
    {data.map((recipe) => (
      <div className="flex   justify-center p-5" key={recipe.id}>
        <div className="bg-white rounded-xl p-3">

        <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}> 
        <img
        className="h-56 w-72 rounded-md"
          src={recipe.recipeImage}/>
       </Link>

        <h3 className="text-3xl font-bold  text-[#ECB159]"> {recipe.recipeName}</h3>
        <p className="text-[grey] font-serif italic font-bold">{recipe.category}</p>
        <p className='text-[grey] font-serif italic font-bold'>{recipe.cuisine}</p>
        <p className='text-[grey] font-serif italic font-bold'>{recipe.recipeTime}</p>
        
        </div>
      </div>
    ))} 
    </div>

  
  </>
  )
}

export default SouthIndian