import React, { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RecipeUpdate from "./RecipeUpdate";
import { MdDelete } from "react-icons/md";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import img1 from "./1875747.jpg"; // Import the image file

function UserDetails() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState();
  const [data1, setData1] = useState([]);

  const addingData = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then(() => {
      toast.success("Your document is successfully added");
    });

    const imageURL = await getDownloadURL(storageRef);
    const washingtonRef = doc(db, "user details", "6hEkFxV1P50vASyplPvX");
    await updateDoc(washingtonRef, {
      // Assuming 'imageUrl' is the field in Firestore where you store the image URL
      imageUrl: imageURL, // Update the 'imageUrl' field with the new image URL
    });
    toast.success("your image has been uploaded...");
  };

  useEffect(() => {
    Calling1();
  }, []);

  async function Calling1() {
    try {
      const querySnapshot = await getDocs(collection(db, "Add Recipes"));
      const multipleArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteringMaharastrian = multipleArray.filter(
        (recipe) => recipe.userUID === auth.currentUser.uid
      );
      setData1(filteringMaharastrian);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    }
  }

  useEffect(() => {
    Calling();
  }, []);

  async function Calling() {
    try {
      const querySnapshot = await getDocs(collection(db, "user details"));
      const multipleArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filtering = multipleArray.filter(
        (data) => data.email === localStorage.getItem("email")
      );
      setData(filtering);
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  }

  async function deleteRecipe(recipeId) {
    try {
      await deleteDoc(doc(db, "Add Recipes", recipeId));
      toast.success("Recipe deleted successfully");
      // After deletion, you might want to refresh the data to reflect the changes
      Calling1(); // Assuming this function fetches the recipes again
    } catch (error) {
      console.error("Error deleting recipe: ", error);
      toast.error("Failed to delete recipe");
    }
  }

  return (
    <>
      <Navbar />

      {data.map((user) => (
        <div className="ml-80 mt-10 mr-80" key={user.id}>
          <div className="">
            <div className="flex mb-2 justify-center">
              {user.imageUrl ? (
                <img
                  className="rounded-full  mb-1"
                  src={user.imageUrl}
                  height={200}
                  width={200}
                  alt="User Avatar"
                />
              ) : (
                <>
                  <input
                    className=""
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <button className="" onClick={addingData}>
                    upload
                  </button>
                </>
              )}
            </div>

            <div>
              <h1 className="font-bold text-center text-3xl ">
                {user.username}
              </h1>
              <p className="text-xl  font-bold text-center ">
                {user.name.toUpperCase()}
              </p>

              <div className="flex justify-center mt-5">
                <p className="text-xl  text-[grey]"> {user.email}</p>

                <p className="text-xl  ml-20 text-[grey]">
                  PHONE NO: {user.phoneNo}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-[#F92C85] ml-20 rounded-lg mt-20 mr-20">
        <div className="p-2 grid grid-cols-4">
          {data1.map((recipe) => (
            <div className="flex justify-center p-3" key={recipe.id}>
              <div className="bg-white rounded-xl p-3">
                <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}>
                  <img
                    className="h-56 w-72 rounded-md"
                    src={recipe.recipeImage}
                    alt="Recipe Image"
                  />
                </Link>
                <h3 className="text-3xl font-bold  text-[#ECB159]">
                  {recipe.recipeName}
                </h3>
                <p className="text-[grey] font-serif italic font-bold">
                  {recipe.category}
                </p>
                <p className="text-[grey] font-serif italic font-bold">
                  {recipe.cuisine}
                </p>
                <p className="text-[grey] font-serif italic font-bold">
                  {recipe.recipeTime} mins
                </p>
                <div className="text-[grey] font-serif italic font-bold">
                  Posted By - {recipe.postedBy}
                  <div className="flex">
                    <RecipeUpdate recipeKey={recipe.id} />
                    <button onClick={() => deleteRecipe(recipe.id)}>
                      <MdDelete size={25} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
