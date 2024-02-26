import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { toast } from "react-toastify";
import Navbar from "./Navbar";  
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { GiTomato } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa6";
import { PiOrangeSliceFill } from "react-icons/pi";

function AddRecipies() {
  const [Name, setname] = useState("");
  const [Description, setdescription] = useState("");
  const [image, setimage] = useState();
  const [Category, setcategory] = useState('');
  const [cuisine, setcuisine] = useState('');
  const [timer, settimer] = useState(''); 

  const addingData = async () => {
    console.log(image)
    const storage = getStorage();
    console.log();
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then(() => {
      toast.success("Your document is successfully added");
    });

    const imageURL = await getDownloadURL(storageRef);
    getDownloadURL(storageRef)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(imageURL);
    try {
      const docRef = await addDoc(collection(db, "Add Recipes"), {
        recipeName: Name,
        recipeDescription: Description,
        recipeImage: imageURL,
        category: Category,
        cuisine: cuisine,
        recipeTime: timer
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Recipe added succesfully😁");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wrong! Try again later. 🥲");
    }
  };

  return (
    <div className="">
      <Navbar />
     
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#70c1c9]  mt-14 p-2 ml-6 mr-10  rounded-md">
             <div className="ml-12 mb-10 mr-10    flex justify-between">
             <GiTomato className=" text-[red] " size={90}/>
             <IoFastFoodSharp  className=" text-[green]" size={90}/>
        <h1 className="text-center text-white mt-6 text-5xl font-[480] mb-7">ADD RECIPES TO OUR LIBRARY</h1>

              <FaCarrot className="text-[#ff7d36]" size={90}/>
              <PiOrangeSliceFill className="text-[yellow]"size={90}/>
             </div>

            <div className="flex">               
            <label><p className="ml-20 text-lg">CATEGORY:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => setcategory(e.target.value)}
                  placeholder="dish Category...."
                  type="text" 
                ></input>
              </div> 

              <label><p className=" text-lg">CUISINE:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => setcuisine(e.target.value)}
                  placeholder="dish Cuisine...."
                  type="text"
                  ></input>
              </div> 

              <label><p className=" text-lg">NAME:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="dish name...."
                  type="text"
                  ></input>
              </div>  
               
              <label><p className=" text-lg">TIME:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => settimer(e.target.value)}
                  placeholder="Time Required...."
                  type="text"
                  ></input>
              </div>  

              <div className="ml-5 mb-5">
                <input
                className="text-lg"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
                ></input>
              </div>
              </div>      

              <label><p className="text-lg mt-10 ml-36">DISH DESCRIPTION:</p></label>
              <div className="flex justify-center">
                <textarea
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="dish description...."
                  className="border-2 border-black ml-10 mr-5 h-52 w-10/12 mb-4 rounded-lg"
                  type="text"
                ></textarea>
              </div>    
             
            
           <div className="flex justify-center">
           <button className=" bg-[#B67352] font-serif font-bold p-2 pr-36 pl-36 rounded-md text-white" onClick={addingData}>
              ADD RECIPE
            </button>
           </div>
          </div>
        </div>
      
    </div>
  );
}

export default AddRecipies;
