import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <header className='h-20 shadow-lg' >
                <nav className='flex bg-blue-500 h-full text-white text-2xl justify-between items-center p-2 gap-10  '>
                    <div>
                        <h1>My WebSite</h1>

                    </div>

                    <aside className='flex justify-center items-center gap-3 '>
                        <Link to='/home' className='hover:text-olive-800 '>
                            Home
                        </Link>

                        <Link to='/about' className='hover:text-olive-800 '>
                            About
                        </Link>

                        <Link to='/services' className='hover:text-olive-800 '>
                            Services
                        </Link>
                        <Link to='/contact' className='hover:text-olive-800 '>
                            Contact
                        </Link>
                    </aside>
                </nav>
            </header>

        </div>
    )
}

export default NavBar
