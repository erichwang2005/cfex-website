import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Hero from './components/Hero'
import HeroInfo from './components/HeroInfo'
import Solutions from './components/Solutions'
import EVCharging from './components/Solutions/EV_Charging'
import CFEOwners from './components/Solutions/CFE_Owners'
import EnterpriseBuyers from './components/Solutions/Enterprise_Buyers'
import Utilities from './components/Solutions/Utilities'
import Products from './components/Products'
import CMS from './components/Products/cms'
import MDMS from './components/Products/mdms'
import MeterToCash from './components/Products/meter-to-cash'
import MeterToEAC from './components/Products/meter-to-eac'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element=
        {
          <>
            <Hero/>
            <HeroInfo/>
          </>
        }/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/solutions" element = {<Solutions/>}/>
        <Route path="/solutions/ev-charging" element={<EVCharging/>}/>
        <Route path="/solutions/cfe-owners" element={<CFEOwners/>}/>
        <Route path="/solutions/enterprise-buyers" element={<EnterpriseBuyers/>}/>
        <Route path="/solutions/utilities" element={<Utilities/>}/>
        <Route path="/products" element = {<Products/>}/>
        <Route path="/products/mdms" element = {<MDMS/>}/>
        <Route path="/products/cms" element = {<CMS/>}/>
        <Route path="/products/meter-to-eac" element = {<MeterToEAC/>}/>
        <Route path="/products/meter-to-cash" element = {<MeterToCash/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
