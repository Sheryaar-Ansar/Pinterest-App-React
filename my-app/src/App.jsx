import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Pinterest from './components/Pinterest'
import ImageGenerator from './components/ImageGenerator'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pinterest/>} />
        <Route path='/image-generator' element={<ImageGenerator/>} />
      </Routes>
    </>
  )
}

export default App
