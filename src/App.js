import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route} from "react-router-dom";

import About from './Pages/About/About';
import Login from './Pages/Login/Login';

import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

// import MyFortfolio from './Pages/MyFortfolio/MyFortfolio';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Pages/Purchase/Purchase';

import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound';
import MyFortfolio from './Pages/MyFortfolio/MyFortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';


import MyOrders from './Pages/Dashboard/MyOrders';

import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

import AddProduct from './Pages/Dashboard/AddProduct';
import Payment from './Pages/Dashboard/Payment';
import AddReview from './Pages/Dashboard/AddReview';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';



function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="myFortFolio" element={<MyFortfolio />} />
        
        <Route path='/part/:id' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
       
            {/* dashboard */}
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
        <Route index element={<MyOrders></MyOrders>}></Route>
         <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
         
         
           {/* //admin route */}
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
         </Route>
        
       
      <Route path="blogs" element={<Blogs/>} />
       <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <ToastContainer />
</div>
  );
}

export default App;
