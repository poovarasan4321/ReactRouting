//! this  file is routes configuration file for react application
//? 2nd way of routing : createBrowserRouter()  -- modern way

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../Components/Login";
import Register from "../Components/Register";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                // standard way 
                index: true,

                // normal way 
                // path:'/'
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            }, {
                path: "/contact",
                element: <Contact />
            }, {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "*",
                element: <h1>404! page not Founded</h1>
            }
        ]
    },

])

export default myRoutes;