import React from 'react'
import './App.css'
// import Header from './components/Header'
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}
export default App