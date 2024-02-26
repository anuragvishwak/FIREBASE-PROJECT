import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import Filter from "./Filter";
import { FaSearch } from "react-icons/fa";

function RecipeCollection() {
  const [data, setdata] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
    Calling();
  }, [selectedTime]);

  async function Calling() {
    const querySnapshot = await getDocs(collection(db, "Add Recipes"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (selectedTime) {
      const filterData = multipleArray.filter(
        (recipe) => recipe.recipeTime === selectedTime
      );
      setdata(filterData);
    } else if (search) {
      const filterData1 = multipleArray.filter(
        (recipe) =>
          recipe.cuisine.includes(search) ||
          recipe.recipeName.includes(search) ||
          recipe.category.includes(search) ||
          recipe.cuisine.includes(search)
      );
      setdata(filterData1);
      setsearch("");
    } else {
      setdata(multipleArray);
    }
  }

  //this function is run cvalling function  calling and then setting the state of search the specific recipe...
  const handleSearch = () => {
    Calling();
  };

  return (
    <>
      <div className="bg-[#faead0]">
        <Navbar />

        <div className="flex mb-10 mt-6 items-center ml-10 mr-10">
          <h1 className=" text-5xl flex font-bold  text-[#B67352] ml-10 mr-36">
            WELCOME TO THE RECIPE COLLECTION
          </h1>
          <div className="flex justify-center">
            <input
              value={search}
              type="text"
              onChange={(e) => setsearch(e.target.value)}
              className="border-[#ECB159] rounded-xl p-1 border-4 mr-2"
            ></input>
            <button onClick={handleSearch}>
              <FaSearch className="text-[#ECB159]" size={25} />
            </button>
          </div>

          <Filter onSelectTime={setSelectedTime} />
        </div>

        <div className="bg-[#B67352] p-5 rounded-xl ml-10 mr-10 mt-1">
          <div className="gap-7 p-5 grid grid-cols-4">
            {data.map((recipe) => (
              <div className=" flex" key={recipe.id}>
                <div className="bg-white p-4 rounded-xl">
                  <Link
                    to={`/detailedDescription/${recipe.id}`}
                    key={recipe.id}
                  >
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

                  <div className="text-[grey]  flex">
                    <FaClock className="mt-1  mr-1" />
                    <p className="font-serif italic font-bold">
                      {recipe.recipeTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCollection;
