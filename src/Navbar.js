import React from "react";
import { Link } from "react-router-dom";
import { SiCodechef } from "react-icons/si";
import { getAuth } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { FaUserLarge } from "react-icons/fa6";
import Logout from "./Logout";

function Navbar() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    Calling();
  }, []);

  async function Calling() {
    const querySnapshot = await getDocs(collection(db, "user details"));
    const multipleArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const gettingName = multipleArray.filter(
      (data) => data.email === localStorage.getItem("email")
    );

    setdata(gettingName);
  }

  return (
    <div className="p-1  flex text-black font-sans shadow-2xl h-20 text-xl  items-center  bg-[#FDF5DF] sticky top-0">
      <div className="flex items items-center">
        <SiCodechef className=" text-black ml-3" size={40} />
        <Link className="mr-6 hover:text-[#F92C85] ml-5" to="/Home">
          HOME
        </Link>

        <Link className="mr-6 hover:text-[#F92C85]" to="/RecipeCollection">
          RECIPE COLLECTIONS
        </Link>

        <Link className="mr-80   hover:text-[#F92C85]" to="/AddRecipies">
          ADD RECIPE
        </Link>

        <Link to="/UserDetails">
          <FaUserLarge className="ml-96 hover:text-[#F92C85] mr-1" />
        </Link>
        {data.map((e) => e.name)}
        <div className="mt-2 ml-12">
        <Logout />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
