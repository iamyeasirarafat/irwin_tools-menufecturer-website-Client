
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Footer from './components/shared/Footer/Footer';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className="bg-gray-800 text-gray-100" >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
