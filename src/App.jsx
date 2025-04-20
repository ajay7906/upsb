import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavbarCom/Navbar'
import Hero from "./Pages/HeroSections/Hero";
import Footer from "./Components/Footers/Footer";
import AboutPage from './Pages/HeroSections/about/About';
import ContactPage from './Pages/HeroSections/contact/ContactPage';
import CareerPage from './Pages/HeroSections/career/CareerPage';
import BlogPage from './Components/blog/BlogPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        </Routes>
        <Footer/>
      </Router>                          
    </>
  )
}

export default App
