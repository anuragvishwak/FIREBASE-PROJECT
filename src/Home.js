import { useState,useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import Navbar from './Navbar';
import { auth, db } from "./firebaseConfig";
import img1 from './GettyImages-1223580360.webp'
import Cuisine from "./Cuisine";
import Chef from "./Chef";
import Category from "./Category";
import { Link } from "react-router-dom";

function Home() {
  
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

   console.log(auth.currentUser)

  return (  
    <div>
         <div>
         <Navbar/>
      <img src={img1} className="h-screen w-full mb-20"/>
         </div>
      <Cuisine/>
    <div className="mb-40"></div>
     <Category/>    
     
     <div className="mt-20 text-white p-1 ml-32 mr-32 rounded-xl bg-[#F92C85]"> 
      <h1 className="text-6xl   font-[100] flex justify-center mb-7">AUNTHENTIC RECIPE COLLECTION!</h1>
     <div className="ml-6 mb-6 mr-6 gap-10 grid grid-cols-4">
          {data.splice(0,8).map((recipe) => (
            <div className="bg-white hover:shadow-indigo-500/40 shadow-xl border-black border-1 rounded-md" key={recipe.id}>
              <div className=" mb-10">
          <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}> 
              <div className="flex justify-center">
              <img
              className="h-44 w-60 mb-4 mt-3 rounded-md"
                src={recipe.recipeImage}/>
              </div>
                </Link>
              <h3 className="text-2xl font-bold ml-5 text-[#d3065f]"> {recipe.recipeName}</h3>
              <p className=" text-[grey] ml-5 font-bold">{recipe.category}</p>
              <p className=" text-[grey] ml-5">{recipe.cuisine}</p>
     <div className="text-[grey] font-serif ml-5 font-bold">Posted By - {recipe.postedBy}</div>

              </div>
            </div>
          ))} 
        </div>
       <Link to='/RecipeCollection'> <p className="mr-10 mb-4 text-xl text-[grey] flex justify-end"><u>VIEW MORE....</u></p> </Link>
     </div>
    
     <Chef/>
    </div>
  )
}

export default Home