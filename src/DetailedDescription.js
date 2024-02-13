import React from 'react'
import img1 from './OIP.jpeg'
import Navbar from './Navbar'
function DetailedDescription() {
  return (
    <>
     <Navbar/>
    <div className='detailedDescription-contianer'> 
    <div className='detailedDescription'>
         <div className='nameAndImage'><img className='imager' src={img1} height={200} width={230}/>
        <h1 className='anotherHeader'>PANEER BUTTER MASALA</h1></div>
        <div className='descriptioner'>
         Also known as “Butter Paneer,” this yummy and popular vegetarian dish is derived from the recipe for Butter Chicken, a.k.a. Chicken Makhani, that I learned to make during my cooking school days. I know, I know, the thought of me cooking with meat sounds insane. It seems nearly a lifetime ago!

With my easy, quick and delicious recipe you can prepare this Restaurant style Paneer Butter Masala at home. In fact, it’s so easy that you can make it on even busy weeknights! This simple dinner takes just 10 minutes of prep work and 30 minutes on the stove.

My delicious Paneer Butter Masala recipe is one of the most popular recipes on the blog. It has been made and loved by hundreds of readers.

Don’t just take my word for it, either. You can read the comments at the end of the post, which has a lot of positive feedback and reviews from our readers and fans.
         </div>
    </div>
    </div>
    </>
  )
}

export default DetailedDescription