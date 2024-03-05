import React, { useState,useEffect } from "react";
import { collection, addDoc,getDocs } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { toast } from "react-toastify";
import Navbar from "./Navbar";  
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { GiTomato } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa6";
import { PiOrangeSliceFill } from "react-icons/pi";

function AddRecipies() {
  const [Name, setname] = useState("");
  const [Description, setdescription] = useState("");
  const [image, setimage] = useState();
  const [Category, setcategory] = useState('');
  const [cuisine, setcuisine] = useState('');
  const [timer, settimer] = useState(''); 
  const [data, setdata] = useState([]);

  const addingData = async () => {
   
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then(() => {
      toast.success("Your document is successfully added");
    });

    const imageURL = await getDownloadURL(storageRef);
    getDownloadURL(storageRef)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    try {
      const docRef = await addDoc(collection(db, "Add Recipes"), {
        recipeName: Name,
        recipeDescription: Description,
        recipeImage: imageURL,
        category: Category,
        cuisine: cuisine,
        recipeTime: timer,
        postedBy: `${data.map(e=>e.name)}`, 
        userUID: auth.currentUser.uid
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Recipe added succesfully😁");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wrong! Try again later. 🥲");
    } 
  };

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
    <div className="">
      <Navbar />
     
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#00004d]  fixed inset-0 bg-cover bg-center bg-opacity-70 mb-10 mt-28 p-5 ml-20 mr-20  rounded-md">
             <div className="mb-10    flex justify-center">
           
        <h1 className="text-center text-white mt-6 text-5xl font-[480] mb-7">ADD RECIPES TO OUR LIBRARY</h1>

              
             </div>

            <div className="flex">               
            <label><p className="ml-20 text-xl font-bold text-[#5EBEC4]">CATEGORY:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => setcategory(e.target.value)}
                  placeholder="dish Category...."
                  type="text" 
                ></input>
              </div> 

              <label><p className="text-xl font-bold text-[#5EBEC4]">CUISINE:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => setcuisine(e.target.value)}
                  placeholder="dish Cuisine...."
                  type="text"
                  ></input>
              </div> 

              <label><p className="text-xl font-bold text-[#5EBEC4]">NAME:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="dish name...."
                  type="text"
                  ></input>
              </div>  
               
              <label><p className="text-xl font-bold text-[#5EBEC4]">TIME:</p></label>
              <div className="ml-1">
                <input
                className="border-2 border-black  rounded-lg h-8 mb-4 w-11/12"
                  onChange={(e) => settimer(e.target.value)}
                  placeholder="Time Required...."
                  type="number"
                  ></input>
              </div>  

              <div className="ml-5 mb-1">
                <input
                className="text-xl font-bold text-[#5EBEC4]"
                  type="file"
                  onChange={(e) => setimage(e.target.files[0])}
                ></input> 
              </div>
              </div>      

              <label><p className="text-xl font-bold text-[#5EBEC4] mt-5 ml-36">DISH DESCRIPTION:</p></label>
              <div className="flex justify-center">
                <textarea
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="dish description...."
                  className="border-2 border-black ml-10 mr-5 h-56 w-10/12 mb-4 rounded-lg"
                  type="text"
                ></textarea>
              </div>       
            
           <div className="flex justify-center">
           <button className=" bg-[#5EBEC4] font-serif text-xl font-bold p-2 pr-36 pl-36 rounded-md text-white" onClick={addingData}>
              ADD RECIPE
            </button>
           </div>
          </div>
        </div>
      
    </div>
  );
}

export default AddRecipies;