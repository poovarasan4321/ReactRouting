import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import NavBar from './Components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './Components/Login'
import Layout from './layout/Layout'
// import myRoutes from './routes/routes'
import myRoutes from './routes/routes'
import Parent from './PerformanceOptimizationTechniques/Parent'
import UseMemoHook from './PerformanceOptimizationTechniques/UseMemoHook'
import CallBackParent from './PerformanceOptimizationTechniques/CallBackParent'
import MainComponent from './PerformanceOptimizationTechniques/MainComponent'
import Counter from './UseReducerHook/Counter'

const App = () => {
  return (
    <>

      {/* // <BrowserRouter> */}
      {/* //   <Routes> */}

      {/* //     parent and children  we can use layout to focus to study this topic */}
      {/* //     <Route path='/' element={<Layout />}> */}
      {/* //       child rote  */}
      {/* //       if we display by default means use path same  */}
      {/* //       index true means sames path as parent  provide child  */}

      {/* //       <Route index={true} element={<Home />} /> */}
      {/* //       <Route path='/about' element={<About />} /> */}
      {/* //       <Route path='/services' element={<Services />} /> */}
      {/* //       <Route path='/contact' element={<Contact />} /> */}
      {/* //       <Route path='/login' element={<Login />} /> */}
      {/* //       <Route path='*' element={<h2>Page Not Founded</h2>} /> */}
      {/* //     </Route> */}

      {/* //   </Routes> */}
      {/* // </BrowserRouter> */}




      {/* provide the routes */}

      {/* <RouterProvider router={myRoutes}/> */}


      {/* <Parent /> */}
      {/* <UseMemoHook /> */}
      {/* <CallBackParent/> */}
      {/* <MainComponent/> */}
      <Counter />
    </>


  )
}

export default App
