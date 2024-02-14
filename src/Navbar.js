import React from "react";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

function Navbar() {
  return (
    <div className=" bg-[#ECB159]">
      <div className="flex ml-7 p-2 text-white font-bold text-2xl">
        <Link className="mr-10" to="/Home">
          HOME
        </Link>
        <Link className="mr-10" to="/RecipeCollection ">
          {" "}
          RECIPE COLLECTIONS
        </Link>
        <Link className="mr-10" to="/AddRecipies">
          ADD RECIPE
        </Link>
        <Link className="mr-60" to="/DetailedDescription">
          RECIPE DESCRIPTION
        </Link>
        <Link className="ml-96" to="/">
          <BiLogOutCircle  size={40}/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
