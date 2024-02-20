import React from 'react'
import { useState,useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Navbar from './Navbar';
import img1 from './The-10-Most-Popular-Dishes-in-China.jpg'
import img2 from './types-of-cuisine.jpg'

function Chinese() {

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
      const filteringChinese = multipleArray.filter(recipe => recipe.cuisine === 'Chinese Cuisine')
      console.log(filteringChinese)
    setdata(filteringChinese  );
    }

  return (
  <>
    <Navbar/>
      <div className='flex justify-center '>
<p className='text-8xl italic  text-black font-serif'>CHINESE CUISINES</p>
   </div>
   <div className='flex justify-center  mb-10'>
     <img src={img1} width={760} height={500}/>
     <img src={img2} width={760} height={500}/>
     </div>
     <p className='text-center bg-[#99dbe1] italic text-3xl p-2 font-[700] mb-10 text-white'>"From the fiery heat of Sichuan to the delicate balance of Cantonese flavors, Chinese cuisine is a rich tapestry of taste."</p>
    <div className="ml-10  mr-10 bg-[#ECB159] grid grid-cols-4">
    {data.map((recipe) => (
      <div className="flex mt-1 justify-center p-3  " key={recipe.id}>
        <div className="bg-white rounded-xl p-3">
        <img
        className="h-56 w-72 rounded-md"
          src={recipe.recipeImage}/>
        <h3 className="text-3xl font-bold  text-[#ECB159]"> {recipe.recipeName}</h3>
        <p className="text-[grey] font-serif italic font-bold">{recipe.category}</p>
        <p className='text-[grey] font-serif italic font-bold'>{recipe.cuisine}</p>

        </div>
      </div>
    ))} 
  </div>
  </>
  )
}

export default Chinese