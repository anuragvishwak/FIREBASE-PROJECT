import { useState,useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import Navbar from './Navbar';
import { db } from "./firebaseConfig";
import img1 from './GettyImages-1223580360.webp'
import Cuisine from "./Cuisine";
import Chef from "./Chef";
import Category from "./Category";
import { Link } from "react-router-dom";

function Home({userName}) {
  
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
    <div className="">
      <Navbar userName={userName}/>
      <img src={img1} className="h-screen w-full mb-20"/>
      <Cuisine/>
      <div className="bg-[#99dbe1] p-2 text-white text-center font-bold italic text-2xl mb-20 mt-20">
     “Am I tough? Am I strong? Am I hard-core? Absolutely.
Did I whimper with pathetic delight when I sank my teeth into my hot fried-chicken sandwich? You betcha.”
     </div>
     <Category/>    
     <div className="mt-20 text-white p-1 ml-32 mr-32 bg-[#00a676]"> 
      <h1 className="text-6xl   font-[100] flex justify-center mb-7">AUNTHENTIC RECIPE COLLECTION!</h1>
     <div className="ml-6 mb-6 mr-6 gap-10 grid grid-cols-4">
          {data.splice(0,8).map((recipe) => (
            <div className=" bg-white rounded-md" key={recipe.id}>
              <div className=" mb-10">
          <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}> 
              <div className="flex justify-center">
              <img
              className="h-44 w-60 mb-4 mt-3 rounded-md"
                src={recipe.recipeImage}/>
              </div>
                </Link>
              <h3 className="text-2xl font-bold ml-5 text-[#B67352]"> {recipe.recipeName}</h3>
              <p className=" text-[grey] ml-5 font-bold">{recipe.category}</p>
              <p className=" text-[grey] ml-5">{recipe.cuisine}</p>
     <div className="text-[grey] font-serif ml-5 italic font-bold">Posted By - {recipe.postedBy}</div>

              </div>
            </div>
          ))} 
        </div>
       <Link to='/RecipeCollection'> <p className="mr-10 mb-4 text-xl text-white  flex justify-end"><u>VIEW MORE....</u></p> </Link>
     </div>
    
     <Chef/>
    </div>
  )
}

export default Home