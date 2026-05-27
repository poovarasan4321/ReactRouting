import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

import React from 'react'
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <main className="h-120.5">
                {/* Content should be display after clicking on the each link */}
                {/* Outlet provide by router if you want another in sam means use this component  like nav for all pages see output more clear understand */}

                <Outlet />

                {/* if we have an  two component at the same time means use this create two container like div inside use out let seperate */}

                {/* <div> <Outlet/> </div>

                <div> <Outlet/> </div> */}

            </main>
            

        </div>
    )
}

export default Layout
