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
      const storageRef = ref(storage, "some-child");
      const imageURL = await getDownloadURL(storageRef);
    console.log(storage);
    console.log(storageRef);
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

      <h1 className="centering">ADD RECIPES TO OUR LIBRARY</h1>
      <div className="container2">
        <label className="adjustingContent">DISH NAME:</label>
        <div>
          <input
            onChange={(e) => setname(e.target.value)}
            className="home-inputField1"
            placeholder="dish name...."
            type="text"
          ></input>
        </div>

        <label>DISH DESCRIPTION:</label>
        <div>
          <textarea
            onChange={(e) => setdescription(e.target.value)}
            className="home-inputField2"
            placeholder="dish description...."
            type="text"
          ></textarea>

          <input
            className="designing"
            type="file"
            onChange={(e) => setimage(e.target.files[0])}
          ></input>
        </div>
        <button onClick={addingData} className="centeringButton">
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default AddRecipies;
