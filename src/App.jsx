import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavbarCom/Navbar'
import Hero from "./Pages/HeroSections/Hero";
import Footer from "./Components/Footers/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Hero />} />
        </Routes>
        <Footer/>
      </Router>                          
    </>
  )
}

export default App
