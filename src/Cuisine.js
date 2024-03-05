import React from 'react'
import img1 from  './types-of-cuisine.jpg'
import img2 from './south indian.jpeg'
import img3 from './punjabi-food-1200x900-1.jpg'
import img4 from './maharashtrian-food-thali-platter-mumbai-style-meal-from-indian_466689-5452.avif'
import { Link } from 'react-router-dom'

function Cuisine() {
  return (
    <div className=' bg-[#F92C85] ml-10 rounded-tr-full rounded-tl-full mr-10  p-3'>
        <div>
        <h1 className="text-center  pb-4 text-white ml-96 rounded-full mr-96 font-[100] text-5xl mb-4">Explore Dishes by Cuisines</h1>
        </div>
   
        <div className='text-center flex justify-between'>

        <Link to='/Chinese'>
            <div className='bg-white hover:shadow-indigo-500/40 shadow-xl p-2 rounded-tl-full rounded-tr-full'>
            <img className='rounded-full h-80  w-80 mb-5' src={img1}/>
            <p className='text-2xl text-[#5EBEC4] font-[400]'>CHINESE CUISINE</p>
            </div>
        </Link> 

            <Link  to="/SouthIndian" >
            <div className='bg-white hover:shadow-indigo-500/40 shadow-xl p-2 rounded-tl-full rounded-tr-full'>
            <img className='rounded-full h-80 w-80 mb-5' src={img2} height={300} width={300}/>
            <p className='text-2xl text-[#5EBEC4] font-[400]'>SOUTH INDIA CUISINE</p>
            </div>
            </Link>

            <Link to='/Pujabi'>
            <div className='bg-white p-2 hover:shadow-indigo-500/40 shadow-xl rounded-tl-full rounded-tr-full'>
            <img className='rounded-full h-80 w-80 mb-5' src={img3} height={270} width={270}/>
            <p className='text-2xl text-[#5EBEC4] font-[400]'>PUNJABI CUISINE</p>
            </div>
            </Link> 

            <Link to='/Maharastrian'>
            <div className='bg-white p-2 hover:shadow-indigo-500/40 shadow-xl rounded-tl-full  rounded-tr-full'>
            <img className='rounded-full h-80 w-80 mb-5' src={img4} height={295} width={295}/>
            <p className='text-2xl text-[#5EBEC4] font-[400]'>MAHARASTRIAN CUISINE</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Cuisine