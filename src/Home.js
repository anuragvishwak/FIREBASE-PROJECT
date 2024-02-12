import { Link } from 'react-router-dom';
import { TbLogout2 } from "react-icons/tb";
import "./App.css";
import Navbar from './Navbar';
import RecipeCollection from './RecipeCollection';

function Home() { 

  return (
    <div>
      <Navbar/>
      <RecipeCollection/>
    </div>
  )
}

export default Home