import React, { useEffect, useState } from 'react'
import { MdOutlineChangeCircle } from "react-icons/md";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from 'react-toastify';
import { collection, doc, onSnapshot, snapshotEqual, updateDoc } from "firebase/firestore";
import { db } from './firebaseConfig';



function RecipeUpdate({recipeKey}) {

    
    const [data, setData]= useState([]);
   useEffect(()=>{
    onSnapshot(collection(db, 'Add Recipes'), (snapshot)=>{
       const filterData = snapshot.docs.filter((doc) => doc.id === recipeKey).map((e) => ({
            id: e.id,
            ...e.data()
        }));
        setData(filterData) 
    })
   },[])

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [Name, setname] = useState(`${data.map(e => e.recipeName)}`);
  const [Description, setdescription] = useState("");



  const updatingData = async () => {
    try {
     updateDoc(doc(db, "Add Recipes",recipeKey), {
        recipeName: Name ,
        recipeDescription: Description
      });
      setMenuOpen(false)
      toast.success("Recipe added succesfully😁");   
    } catch (e) {
      setMenuOpen(false)
      toast.error("Something went wrong! Try again later. 🥲");
    } 
  };



    const backButton = ()=>{
       setMenuOpen(false);
    }

  return (
    <>
     <div className="mt-3">
        <button className="" onClick={() => setMenuOpen(true)}>
        <MdOutlineChangeCircle size={25}/>
        </button>
      </div>
      

      {isMenuOpen && (
       <div className='bg-black  fixed inset-0 bg-cover bg-center bg-opacity-70'>
              <button className='text-white p-2 rounded-lg bg-[red]  ml-4 mt-4' onClick={backButton}>X</button>
              <div className='ml-72 mt-32 mr-40'>
              <div className="ml-1">
              <label><p className="text-xl font-bold text-[#5EBEC4]">NAME:</p></label>
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-10/12"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="dish name...."
                  type="text"
                  value={Name}
                  ></input>
              </div>

              <div className="">
              <label><p className="text-xl font-bold text-[#5EBEC4] mt-5 ">DISH DESCRIPTION:</p></label>  
                <textarea
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="dish description...."
                  className="border-2 border-black  mr-5 h-52 w-10/12 mb-4 rounded-lg"
                  type="text"
                ></textarea>
              </div> 
              <button className='text-[#5EBEC4] ml-96' onClick={updatingData}>DONE</button>
              </div>
       </div>
      )}
      </>
  )
}

export default RecipeUpdate