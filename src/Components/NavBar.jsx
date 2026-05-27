import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            
 <header className="w-full h-20 bg-white flex justify-between items-center shadow-xl px-10">
      
      <aside>
        <h1 className="text-3xl font-semibold ">
          BrowserRouter <span className="text-amber-600">Routing</span>
        </h1>
      </aside>

      <nav className="w-[50%] h-full flex justify-evenly items-center">
        <ul className="w-full h-full flex justify-evenly items-center ">
          <li>
            <NavLink
              to={"/"}
              className={
                ({isActive})=> `${isActive ? "bg-amber-600 text-white":""}
                px-4 py-2 rounded cursor-pointer font-semibold text-xl`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
                className={
                ({isActive})=> `${isActive ? "bg-amber-600 text-white":""}
                px-4 py-2 rounded cursor-pointer font-semibold text-xl`
              }            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
                className={
                ({isActive})=> `${isActive ? "bg-amber-600 text-white":""}
                px-4 py-2 rounded cursor-pointer font-semibold text-xl`
              }            >
              About
            </NavLink>
          </li>
           <li>
            <NavLink
              to={"/contact"}
                className={
                ({isActive})=> `${isActive ? "bg-amber-600 text-white":""}
                px-4 py-2 rounded cursor-pointer font-semibold text-xl`
              }            >
              Contact
            </NavLink>
          </li>
           <li>
            <NavLink
              to={"/register"}
                className={
                ({isActive})=> `${isActive ? "bg-amber-600 text-white":""}
                px-4 py-2 rounded cursor-pointer font-semibold text-xl`
              }            >
              Register
            </NavLink>
          </li>
           <li>
            <NavLink
              to={"/login"}
                className={
                ({isActive})=> `${isActive ? "bg-amber-600 text-white":""}
                px-4 py-2 rounded cursor-pointer font-semibold text-xl`
              }            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    
        </div>
    )
}

export default NavBar



// <header className='h-25 shadow-lg ' >
//                 <nav className='flex bg-blue-500 h-full text-white text-2xl justify-between items-center p-5 gap-10  '>
//                     <div>
//                         <h1 className='font-semibold'>React <span className='text-lime-400 font-semibold'>Routing</span></h1>
                       

//                     </div>


//                        {/* Link component instead using  a  link it same process   */}

//                     <aside className='flex justify-center items-center gap-3 '>
//                         <Link to='/' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
//                             Home
//                         </Link>

//                         <Link to='/about' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
//                             About
//                         </Link>

//                         <Link to='/services' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
//                             Services
//                         </Link>
//                         <Link to='/contact' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
//                             Contact
//                         </Link>
//                         <Link to='/login' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
//                             Login
//                         </Link>
//                     </aside>
//                 </nav>
//             </header>