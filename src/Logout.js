import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { BiLogOutCircle } from "react-icons/bi"; 

function Logout() {
  function LoggingOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        console.log('you are logout')

      })
      .catch((error) => {
        // An error happened.   
        console.error('email or password is wrong')
      });
  }
  return(
    <div>
       <button onClick={LoggingOut}>
       <BiLogOutCircle  size={30}/>
       </button>
    </div>
  ) 
}

export default Logout;
