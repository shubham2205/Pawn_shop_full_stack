import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/ServicesPage/Services";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Logout from "./Components/FunctionalComponent/LogoutComponent/Logout";
import Register from "./Pages/Register/Register";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import AdminHome from "./Components/Admin/AdminHomeComponent/AdminHome";
import ManageUsers from "./Components/Admin/ManageUsersComponent/ManageUsers";
import CPAdmin from './Components/Admin/CPAdmin/CPAdmin';
import EPAdmin from './Components/Admin/EPAdmin/EPAdmin';
import AddCategory from './Components/Admin/AddCategory/AddCategory';
import AddSubCategory from './Components/Admin/AddSubCategory/AddSubCategory';

import UserHome from "./Components/UserComponent/UserHome/UserHome";
import VPCategory from "./Components/UserComponent/VPCategory/VPCategory";
import VPSubCategory from "./Components/UserComponent/VPSubCategory/VPSubCategory";
import AddProduct from "./Components/UserComponent/AddProduct/AddProduct";
import ViewProduct from "./Components/UserComponent/ViewProduct/ViewProduct";
import ReviewProduct from "./Components/Admin/ReviewProduct/ReviewProduct";



const App = () => {
  return (
    <div className="px-3 md:px-0 bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/manageusers" element={<ManageUsers />}></Route>
        <Route path="/epadmin" element={<EPAdmin />}></Route>
        <Route path="/cpadmin" element={<CPAdmin />}></Route>
        <Route path="/addcategory" element={<AddCategory/>}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory/>}></Route>

        <Route path="/userhome" element={<UserHome />}></Route>
        <Route path="/vpcategory" element={<VPCategory />}></Route>
        <Route path="/vpsubcategory/:catnm" element={<VPSubCategory />}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/viewproduct/:subcatnm" element={<ViewProduct/>}></Route>
        <Route path="/reviewproduct" element={<ReviewProduct/>}></Route>


      </Routes>
      <Footer />
    </div>
  );
};

export default App;
