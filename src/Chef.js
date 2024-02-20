import React from 'react'
import img from './Chef_Ranveer_Brar.avif'
import img1 from './OIP (2).jpeg'

function Chef() {
  return (
    
       <>
          <h1 className='text-center font-[200] font-italic mt-20 mb-7 text-5xl'>DISCOVER MORE ABOUT INDIAN CHEF....</h1>
       <div className='flex justify-center gap-10 ml-10 mr-10'>
  
                
          <div className='bg-[#8CB9BD] p-2 h-1/2 rounded-2xl w-3/6'>
          <div className=' flex'> 
           <img className='h-40 w-60 rounded-md' src={img}/>
            <h3 className='text-5xl font-[200] text-white ml-12 flex items-center'>CHEF RANVEER BRAR</h3>
           </div>
 
                
            <p className='text-justify text-white italic text-xl  mt-4'>
            Truth be told, I entered the Culinary world with no expectations, but just the Love for everything food. All I knew through it all, was that I was doing what I love and wanted to do for the rest of my life. And I’ve always believed that Food is a giver. When you invest so much in it unconditionally, it will surely give back.
            Ranveer Brar, an acclaimed chef, once said, "Food is a universal language that connects people from different cultures and backgrounds." This profound statement beautifully captures the essence of food as a unifying force in the world. Food, regardless of its origin or ingredients, has the remarkable ability to transcend cultural barriers and foster a sense of community. Sharing a meal with someone allows us to gain insights into their heritage, traditions, and values. It serves as a catalyst for dialogue, promoting understanding, acceptance, and appreciation for diverse cultures. 
            </p>
          </div>
        
          <div className='bg-[#8CB9BD]  h-1/2 p-2 w-3/6 rounded-2xl'>
                <div className='flex justify-center'>
            <img className='h-40 w-60 rounded-md  ' src={img1}/>
            <h3 className='text-5xl text-white   font-[200] ml-12 flex items-center'>CHEF SANJEEV KAPOOR</h3>
 
                </div>
        <p className='text-justify italic text-white text-xl mt-4'>Millets, our ‘Shri Anna’ are fast gaining popularity. In this article we share some interesting millets recipes that you can easily include in your meals. These are simple recipes that anyone who is looking to incorporate millets in their diet can start with. Here, we show you how one can make regular preparations using millets. 

When cooking millets, it is advisable to know which types of millets need soaking and what are the right ways to cook each of the varieties. While you follow these guidelines, also know that it is important to not overdo millets. Apparently, millets could be difficult for some to digest. So, you should alternate between different millet varieties. 

 So, now that we have done our due diligence, let us start and go by course as to what amazing recipes we can make with millets. Remember, we are keeping lunch simple, and so, it's a quick and healthy meal.</p>
    </div>
        
       </div>
       </>
       
  )
  
}

export default Chef