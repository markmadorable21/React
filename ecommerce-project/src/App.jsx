import {Routes, Route} from 'react-router';
import { useState } from 'react'
import {HomePage} from './pages/HomePage.jsx'
import './App.css'

function App() {
 
// <Routes> = tells React all the pages in our website
// <Route> = to add a page to our website
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route index element={<HomePage />} /> */}
      <Route path="/checkout" element={<h1>Checkout Page</h1>} />
    </Routes>
  )
}

export default App
