import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import NavBar from './Components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './Components/Login'
import Layout from './layout/Layout'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        {/* parent and children  we can use layout to focus to study this topic*/}
        <Route path='/' element={<Layout/>}>
          {/* child rote  */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h2>Page Not Founded</h2>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
