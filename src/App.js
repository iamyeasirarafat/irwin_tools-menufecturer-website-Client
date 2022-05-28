
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Purchase from './components/Purchase/Purchase';
import Footer from './components/shared/Footer/Footer';
import Navbar from './components/shared/Navbar/Navbar';
import ProtectedRoute from './components/shared/ProtectedRoute/ProtetedRoute';
import PageNotFound from './components/pageNotFound/pageNotFound'
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard/Dashboard';
import OrderSummary from './components/Dashboard/OrderSummary';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import MakeAdmin from './components/Dashboard/MakeAdmin';
function App() {
  return (
    <div className="bg-gray-800 text-gray-100" >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path='purchase/:id' element={<ProtectedRoute><Purchase/></ProtectedRoute>}></Route>
        <Route path='dashboard' element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>}>
          <Route index element={<OrderSummary/>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manage' element={<ManageAllOrders/>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin/>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
      <div><Toaster/></div>
    </div>
  );
}

export default App;
