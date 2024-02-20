import React from "react";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";    
import { TiSocialTwitter } from "react-icons/ti";  
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar({username}) {
  return (
      <div className="flex p-1 text-white font-serif font-bold text-2xl items-center bg-[#B67352] sticky top-0">
         <h1 className="rounded-full p-1 bg-gradient-to-r from-[#B67352] to-[green] ml-7 text-4xl">ANU COOKS!</h1>
        <Link className="mr-7 ml-5" to="/Home">
          HOME
        </Link>
        <Link className="mr-7" to="/RecipeCollection ">
          
          RECIPE COLLECTIONS
        </Link> 
        <Link className="mr-28" to="/AddRecipies">
          ADD RECIPE
        </Link>
       
        <Link to='https://twitter.com/home?lang=en-in'><TiSocialTwitter className="ml-60  mr-1" size={25}/></Link>
       <Link to='https://www.facebook.com/'><TiSocialFacebook className="mr-1" size={25}/></Link>
        <Link to='https://www.instagram.com/?hl=en'><RiInstagramFill className="mr-1" size={25}/></Link>
        <Link to='https://www.linkedin.com/login'><FaLinkedinIn className="mr-6" size={25}/></Link>
        <Link className="ml-20   " to="/">
            {username }
          <BiLogOutCircle  size={30}/>
        </Link>
      </div>
  );
}

export default Navbar;
