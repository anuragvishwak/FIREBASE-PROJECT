// RecipeCollection.js
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import Filter from "./Filter";

function RecipeCollection() {
  const [data, setData] = useState([]);
  const [selectedTime, setSelectedTime] = useState([0, 0]); // Store selected time range
  const [search, setSearch] = useState("");

  useEffect(() => {
    Calling();
  }, [selectedTime]);

  async function Calling() {
    const querySnapshot = await getDocs(collection(db, "Add Recipes"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    let filterData = multipleArray;

    if (selectedTime[0] !== 0 && selectedTime[1] !== 0) {
      filterData = filterData.filter((recipe) => {
        const recipeTime = parseInt(recipe.recipeTime);
        return recipeTime >= selectedTime[0] && recipeTime <= selectedTime[1];
      });
    }

    if (search) {
      filterData = multipleArray.filter(
        (recipe) =>
          recipe.cuisine.includes(search) ||
          recipe.recipeName.includes(search) ||
          recipe.category.includes(search)
      );
    }
    setData(filterData);
  }

  const handleSearch = () => {
    Calling();
  };

  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <div className="flex mb-10 mt-10 justify-center items-center ml-10 mr-10">
          <div>
            <p className="mr-20 font-serif text-8xl">Explore Recipes...</p>
          </div>
          <div>
            <input
              value={search}
              type="search"
              placeholder="search recipe...."
              onChange={(e) => setSearch(e.target.value)}
              className="border-[#5EBEC4] rounded-xl p-1 border-4 mr-2"
            ></input>
            <button onClick={handleSearch}>
              <p className="bg-[#60c6cd] hover:bg-[#34A853]  text-white font-bold p-1 rounded-lg">
                search
              </p>
            </button>
          </div>
          <Filter onSelectTime={setSelectedTime} />
        </div>

        <div className="bg-[#F92C85] p-5 rounded-xl ml-10 mr-10 mt-1">
          <div className="gap-7 p-5 grid grid-cols-4">
            {data.length !== 0 ? (
              data.map((recipe) => (
                <div className=" flex" key={recipe.id}>
                  <div className="bg-white hover:shadow-indigo-500/40 shadow-xl p-4 rounded-xl">
                    <Link
                      to={`/detailedDescription/${recipe.id}`}
                      key={recipe.id}
                    >
                      <img
                        className="h-56 w-72 rounded-md"
                        src={recipe.recipeImage}
                      />
                    </Link>
                    <h3 className="text-3xl font-bold  text-[#d3065f]">
                      {" "}
                      {recipe.recipeName}
                    </h3>
                    <p className="text-[grey] font-serif italic font-bold">
                      {recipe.category}
                    </p>
                    <p className="text-[grey] font-serif italic font-bold">
                      {recipe.cuisine}
                    </p>

                    <div className="text-[grey] flex">
                      <FaClock className="mt-1  mr-1" />
                      <p className="font-serif italic font-bold">
                        {recipe.recipeTime}mins
                      </p>
                    </div>
                    <div className="text-[grey] font-serif italic font-bold">
                      Posted By - {recipe.postedBy}
                    </div>
                    <div className="text-white">{recipe.userUID}</div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-8xl text-white font-bold">Loading....</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCollection;
