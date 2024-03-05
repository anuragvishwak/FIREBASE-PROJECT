import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './2069188.webp'
import img2 from './Poha-2000x1333.jpg'
import img3 from './16ed7f6b3d6ad709a73a8d8ff5d8a50a.jpg'
import img4 from './e1dad5315972c8a9db86fb01d69c7ecb.jpg'


function Category() {
  return (
    <div classN ame='ml-10 mr-10'>
    <div>
    <h1 className="text-center  pb-4 text-[#5EBEC4] ml-96 rounded-full mr-96 font-[100] text-5xl mb-4">Explore Dishes by Categories</h1>
    </div>

    <div className='text-center flex justify-between'>

    <Link to='/FastFood'>
        <div className='bg-[#5EBEC4] hover:shadow-indigo-500/40 shadow-xl p-2 rounded-tl-full  rounded-bl-full rounded-br-full rounded-tr-full'>
        <img className='rounded-full h-80  w-80 mb-3' src={img1}/>
        <p className='text-2xl text-[#F92C85] italic font-[400]'>FAST FOOD</p>
        </div>
    </Link> 

        <Link  to="/Breakfast">
        <div className='bg-[#5EBEC4] hover:shadow-indigo-500/40 shadow-xl  p-2 rounded-tl-full  rounded-bl-full rounded-br-full rounded-tr-full'>
        <img className='rounded-full h-80 w-80 mb-3' src={img2} height={300} width={300}/>
        <p className='text-2xl italic text-[#F92C85] font-[400]'>BREAKFAST</p>
        </div>
        </Link>

        <Link to='/Lunch'>
        <div className='bg-[#5EBEC4] hover:shadow-indigo-500/40 shadow-xl p-2 rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full'>
        <img className='rounded-full h-80 w-80 mb-3' src={img3} height={270} width={270}/>
        <p className='text-2xl text-[#F92C85] italic font-[400]'>LUNCH</p>
        </div>
        </Link> 
    
        <Link to='/Dinner'>
        <div className='bg-[#5EBEC4] p-2 hover:shadow-indigo-500/40 shadow-xl rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-full'>
        <img className='rounded-full h-80 w-80 mb-3' src={img4} height={295} width={295}/>
        <p className='text-2xl italic text-[#F92C85] font-[400]'>DINNER</p>
        </div>
        </Link>
    </div>
</div>
  )
}

export default Category