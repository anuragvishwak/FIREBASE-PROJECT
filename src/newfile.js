import React, { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserDetails() {
  const [data, setData] = useState([]);

  const [data1, setdata1] = useState([]);

  useEffect(() => {
    Calling1();
  }, []);
  async function Calling1() {
    const querySnapshot = await getDocs(collection(db, "Add Recipes"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const filteringMaharastrian = multipleArray.filter(
      (recipe) => recipe.userUID === auth.currentUser.uid
    );
    setdata1(filteringMaharastrian);
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
      console.log(filtering);
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
      <p className="text-center text-6xl mb-10">USER PROFILE</p>
      <p className="text-center text-4xl">WELCOME {data.map((e) => e.name)}</p>

      {data.map((user) => {
        return (
          <div className=" mt-1">
            <div
              className=" bg-[grey] ml-20 mr-20 p-3 flex   shadow-xl"
              key={user.id}
            >
              <div className="flex items-center ml-20">
              <FaUser
                size={200}
                style={{ backgroundColor: "gray" }}
                className="p-5 rounded-full text-white"/>

              <div className="flex text-xl ml-20">
                <p className="font-bold font-serif">
                  USERNAME: {user.username}
                </p>
                <p className="font-serif">NAME: {user.name}</p>
                <p className="font-serif">EMAIL: {user.email}</p>
                <p className="font-serif">PHONE NO: {user.phoneNo}</p>
              </div>
              </div>
            </div>
          </div>
        );
      })}

      <p className="ml-20 mt-10 italic text-4xl text-center">
        YOUR RECIPES....
      </p>
      <div className="ml-20 mt-1 mr-20 bg-[#00a676] p-2 rounded-lg grid grid-cols-4">
        {data1.map((recipe) => (
          <div className="flex  justify-center p-3  " key={recipe.id}>
            <div className="bg-white rounded-xl p-3">
              <Link to={`/detailedDescription/${recipe.id}`} key={recipe.id}>
                <img
                  className="h-56 w-72 rounded-md"
                  src={recipe.recipeImage}
                />
              </Link>
              <h3 className="text-3xl font-bold  text-[#ECB159]">
                {" "}
                {recipe.recipeName}
              </h3>
              <p className="text-[grey] font-serif italic font-bold">
                {recipe.category}
              </p>
              <p className="text-[grey] font-serif italic font-bold">
                {recipe.cuisine}
              </p>
              <p className="text-[grey] font-serif italic font-bold">
                {recipe.recipeTime}mins
              </p>
              <div className="text-[grey] font-serif italic font-bold">
                Posted By - {recipe.postedBy}
                <RecipeUpdate recipeKey = {recipe.id}/> 
                <button onClick={() => deleteRecipe(recipe.id)}>
                  <MdDelete size={25}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserDetails;