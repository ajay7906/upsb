import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavbarCom/Navbar'
import Hero from "./Pages/HeroSections/Hero";
import Footer from "./Components/Footers/Footer";
import AboutPage from './Pages/HeroSections/about/About';
import ContactPage from './Pages/HeroSections/contact/ContactPage';
import CareerPage from './Pages/HeroSections/career/CareerPage';
import BlogPage from './Components/blog/BlogPage';
import Login from './Pages/login/Login';
import { AuthProvider } from './context/AuthContext';
import AdminDashboard from './admin/AdminDashboards';

function App() {
  return (
    <>
     <Router>
    <AuthProvider>
     
        <Navbar/>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/careers" element={<CareerPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route  path='/login' element={<Login/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        </Routes>
        <Footer/>
       
      </AuthProvider>   
      </Router>                     
    </>
  )
}

export default App
