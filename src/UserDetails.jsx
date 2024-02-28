import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Navbar from './Navbar';  
import { FaUser } from "react-icons/fa";

function UserDetails() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Calling();
    }); 

    async function Calling() {
        try {
            const querySnapshot = await getDocs(collection(db, "user details"));
            const multipleArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            const filtering = multipleArray.filter(data => (data.email === localStorage.getItem('email')))
            console.log(filtering);
            setData(filtering);
        } catch (error) {
            console.error("Error fetching user details: ", error);
        }
    }

    return ( 
            <>
            <Navbar/>
   <p className='text-center text-6xl mb-5'>USER PROFILE</p>
    <p className='text-center text-4xl'>WELCOME {data.map(e=>e.name)}</p>
    
{data.map((user) => {
    return (
             <div className='flex justify-center mt-10'>
                <div className='  bg-[grey] p-5' key={user.id}> 
<div className='flex bg-[green] justify-center mb-5'>
<FaUser size={200} className='p-2 bg-[grey]  rounded-full text-white'/>   
</div>
        <div className='text-3xl'>
           Name: {user.name} 
        </div>  
           <div className='text-xl'>
           Email: {user.email}
           </div>
            <div className='text-xl'>
            Password: {user.password}   
            </div>
            <div className='text-xl'>
            Phone Number: {user.phoneNo}
            </div>
            <div className='text-xl'>
            Username: {user.username}   
            </div>
           </div>
             </div>
             );
})}</>
        
    );
}

export default UserDetails;
