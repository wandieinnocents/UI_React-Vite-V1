import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"



function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
  </div>
  )
}

export default App
