import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <header className='h-25 shadow-lg ' >
                <nav className='flex bg-blue-500 h-full text-white text-2xl justify-between items-center p-5 gap-10  '>
                    <div>
                        <h1 className='font-semibold'>React <span className='text-lime-400 font-semibold'>Routing</span></h1>
                       

                    </div>


                       {/* Link component instead using  a  link it same process   */}
                       
                    <aside className='flex justify-center items-center gap-3 '>
                        <Link to='/home' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
                            Home
                        </Link>

                        <Link to='/about' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
                            About
                        </Link>

                        <Link to='/services' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
                            Services
                        </Link>
                        <Link to='/contact' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
                            Contact
                        </Link>
                        <Link to='/login' className='hover:text-olive-800 bg-white text-yellow-600 font-semibold p-2 rounded '>
                            Login
                        </Link>
                    </aside>
                </nav>
            </header>

        </div>
    )
}

export default NavBar
