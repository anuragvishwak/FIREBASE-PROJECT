import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { toast } from "react-toastify";
import Navbar from "./Navbar";  
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function AddRecipies() {
  const [Name, setname] = useState("");
  const [Description, setdescription] = useState("");
  const [image, setimage] = useState();

  const addingData = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    const imageURL = await getDownloadURL(storageRef);
    console.log();
    uploadBytes(storageRef, image).then(() => {
      toast.success("Your document is successfully added");
    });

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
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Recipe added succesfully😁");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wrong! Try again later. 🥲");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center text-[#FEFBF6] justify-center">
        <div className="bg-[#8CB9BD] mt-16 p-3 rounded-md">
            <div>
            <h1 className="text-center mb-4 font-bold">ADD RECIPES TO OUR LIBRARY</h1>
            
              <label><p className="ml-11 font-bold">DISH NAME:</p></label>
              <div className="ml-11">
                <input
                className="rounded-lg h-8 mb-4 w-80"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="dish name...."
                  type="text"
                ></input>
              </div>

              <label><p className="font-bold ml-11">DISH DESCRIPTION:</p></label>
              <div className="flex justify-center">
                <textarea
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="dish description...."
                  className="h-60 w-80 mb-4 rounded-lg"
                  type="text"
                ></textarea>
              </div>
              <div className="ml-24 mb-8">
                <input
                className="font-bold"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
                ></input>
              </div>
            </div>
           <div className="flex justify-center">
           <button className=" bg-[#ECB159] font-serif font-bold p-2 rounded-md text-white" onClick={addingData}>
              ADD RECIPE
            </button>
           </div>
          </div>
        </div>
      
    </>
  );
}

export default AddRecipies;
