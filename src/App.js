import {BrowserRouter as Router, Routes, Route, Link}from 'react-router-dom';
import './App.css';
import Img1 from './internet.png'
import Login from './login';
import SignUp from './SignUp';

function App() {
  return (
    <div className="header">
      <img src={Img1} height={80} width={80}/>
     <h1>WECOME TO RECIPE APP</h1>
   <Router>
  <div className='designingRouters'>
  <Link className='designingLoginLink' to="/login">login</Link>
   <Link className='designingSignupLink' to="/SignUp">Signup</Link>
  </div>
    <Routes>
      <Route path='/login' element={<Login />}>LOGIN</Route>
      <Route path='/SignUp' element={<SignUp />}>SIGNUP</Route>
    </Routes>
   </Router>
    
    </div>
  );
}

export default App;
