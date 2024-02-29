import React from "react";
import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { getAuth } from "firebase/auth";
import { FaArrowRight } from "react-icons/fa";
import { auth, db } from "./firebaseConfig";  
import { collection, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react"; 
import { FaUserLarge } from "react-icons/fa6";

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
    <div className="p-1  flex text-black font-sans shadow-xl h-20 text-xl items-center bg-white sticky top-0">
      <div className="flex items items-center">
      <SiCodechef className=" text-black ml-1" size={40}/>
        <Link className="mr-7 hover:text-[red] ml-5" to="/Home">
          HOME
        </Link>

        <Link className="mr-7 hover:text-[red]" to="/RecipeCollection">
          RECIPE COLLECTIONS
        </Link>

        <Link className="mr-96 hover:text-[red]" to="/AddRecipies">
          ADD RECIPE
        </Link>
      </div>

     
    <Link to='/UserDetails'><FaUserLarge className="ml-96 hover:text-[red] mr-1"/></Link>{data.map(e=>e.name)}
    

      <div className="">
        <Link to="/">
          <p className="text-white bg-black hover:bg-[red] p-1 ml-4 rounded-md"><FaArrowRight size={20}/></p>
        </Link>
        
      </div>  
    </div>  
  );
}

export default Navbar;
