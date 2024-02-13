import React from 'react'
import { TbLogout2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><div className='home-container'> 
    <Link className='homie' to='/Home'>HOME</Link>
    <Link className='homie' to="/RecipeCollection "> RECIPE COLLECTIONS</Link>
    <Link className='homie' to='/AddRecipies'>ADD RECIPE</Link>
    <Link className='homie' to='/DetailedDescription'>RECIPE DESCRIPTION</Link>
    <Link className='homie' to='/'><TbLogout2 /></Link>
 </div></div>
  )
}

export default Navbar