import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Img1 from './sidebarversion2.png'
import Login from './login';
import SignUp from './SignUp';
import Home from './Home';

function App() {    
  return (
   <div className='main-container'>
   {/* <img src={Img1} height={710} width={700}/>   */}
   {/* <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router> */}
    <Home/>
 </div>
  );
} 
export default App;
