import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Home from './components/pages/Home';
//import Header from "./components/pages/Header";
import Login from './components/pages/Login'
import Forgot from "./components/pages/Forgot";
import Register from "./components/pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Shopkeeper from './components/Shopkeeper/Shopkeeper';
import AddProduct from './components/Shopkeeper/AddProduct'
import AddNewShopkeeper from './components/Shopkeeper/AddNewShopkeeper'
// import ShopkeeperProtectedRoutes from './components/ShopkeeperPrivateRoutes'
import SingleProduct from "./components/pages/SingleProduct";
import Wishlist from "./components/pages/Wishlist";
import { GlobalStyle } from "./components/pages/GlobalStyle";
import { ThemeProvider } from "styled-components";
import ErrorPage from "./ErrorPage";
import ProductsList from "./components/Shopkeeper/ProductsList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Products from "./components/pages/Products";
import ShopProducts from "./components/Shopkeeper/ShopProducts";
import ResetPassword from "./components/pages/ResetPassword";
import AddImage from "./components/User/AddImage";
import ShowImage from "./components/User/ShowImage";
import HomePage from "./components/pages/HomePage"
import Women from "./components/pages/Women"
import Kid from "./components/pages/Kid"
import Accessories from "./components/pages/Accessories"






const App = () => {
  const theme = {
    colors:{
      bg:"#fff",
    },
  };

  return (
    <>
      <ThemeProvider theme = {theme}>
      <Router>
        <ToastContainer position="top-center"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forgot />} />
          <Route path="/forgot/reset" element={<ResetPassword/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/shops" element={<Products/>}/>
          <Route path="/shops/allproducts" element={<ShopProducts/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path ="*" element={<ErrorPage/>}/>

          {/* <Route element={<ShopkeeperProtectedRoutes/>}> */}
          
          <Route path="/shops/getshop/:userId" element={<Shopkeeper />} />
          <Route path="/shops/addproduct" element={<AddProduct />} />
          <Route path="/shops/addshop" element={<AddNewShopkeeper />} />
          <Route path="/shopkeeper/updateshopkeeper/:productid" element={<AddNewShopkeeper />} />
          <Route path="/products/allproducts" element={<ProductsList/>} />
          <Route path="/shopkeeper/upadateproduct/:productid"></Route>
          <Route path="/shopkeeper/ratedproducts" element={<Wishlist/>}/>
          <Route path="/addimage" element={<AddImage/>}/>
          <Route path="/showimage" element={<ShowImage/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/Women" element={<Women/>}/>
          <Route path="/Kid" element={<Kid/>}/>
          <Route path="/Accessories" element={<Accessories/>}/>
         

          {/* </Route> */}

        </Routes>
      </Router>
        </ThemeProvider>
     

    </>
  );
}

export default App;
