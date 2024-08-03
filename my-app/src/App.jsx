import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Pinterest from './components/Pinterest'
import ImageGenerator from './components/ImageGenerator'
import Footer from './components/Footer'
import PinterestId from './components/PinterestId'
import CreatePin from './components/CreatePin';

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col mt-[200px] w-full h-full'>
        <Navbar />
        <Routes className={'flex-grow'}>
          <Route path='/' element={<Pinterest />} />
          <Route path='/:id' element={<PinterestId/>} />
          <Route path='/image-generator' element={<ImageGenerator />} />
        </Routes>
        <div className="sticky top-full bottom-0 w-full left-0 block">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
