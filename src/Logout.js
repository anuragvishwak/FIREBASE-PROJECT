import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
 

function Logout() {

const navigate = useNavigate();

  function LoggingOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        console.log('you are logout') 
        navigate('/')
      })
      .catch((error) => {
        // An error happened.   
        console.error('email or password is wrong')
      });
  }
  return(
    <div>
       <button onClick={LoggingOut}>
       <FaArrowRight size={30} className='bg-black hover:bg-[red] p-1 rounded-lg ml-3 text-white'/>
       </button>
    </div>
  ) 
}

export default Logout;
