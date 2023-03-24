import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Webdesign from './Pages/Webdesign/Webdesign';
import Appdesign from './Pages/Appdesign/Appdesign';
import Graphicdesign from './Pages/Graphicdesign/Graphicdesign';
import Locations from './Pages/Locations/Locations';
import Contact from './Pages/Contact/Contact';


function App() {

  return (
    <>
      <Navigationbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/appdesign" element={<Appdesign />} />
        <Route path="/graphicdesign" element={<Graphicdesign />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
