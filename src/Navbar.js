import React from "react";
import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { getAuth } from "firebase/auth";
import Logout from "./Logout";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react";

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
 
     const gettingName = multipleArray.filter(data => (data.email === localStorage.getItem('email')))     
    console.log(gettingName);
   
    setdata(gettingName);
   
  }

  return (
    <div className="p-1  flex text-white font-serif font-bold text-2xl items-center justify-between bg-[#ECB159] sticky top-0">
      <div className="flex">
      <SiCodechef className=" text-white ml-1" size={40} />
        <Link className="mr-7 ml-5" to="/Home">
          HOME
        </Link>

        <Link className="mr-7" to="/RecipeCollection ">
          RECIPE COLLECTIONS
        </Link>

        <Link className="mr-48" to="/AddRecipies">
          ADD RECIPE
        </Link>
      </div>

     <div className="italic">welcome {data.map(e=>e.name)}</div>

      {/* {localStorage.getItem('userName')} */}

      <div className="flex items-center justify-around w-48">
        <Link to="https://twitter.com/home?lang=en-in">
          <TiSocialTwitter className="" size={25} />
        </Link>
        <Link to="https://www.facebook.com/">
          <TiSocialFacebook className="" size={25} />
        </Link>
        <Link to="https://www.instagram.com/?hl=en">
          <RiInstagramFill className="" size={25} />
        </Link>
        <Link to="https://www.linkedin.com/login">
          <FaLinkedinIn className="" size={25} />
        </Link>
        <Link to="/">
          <Logout/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
