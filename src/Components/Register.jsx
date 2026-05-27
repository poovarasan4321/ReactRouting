import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    //! navigate hook from react router dom library

    //! it is use to navigate one page to another page   

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            toast.success("Re-directing to the login page....")
            navigate("/login")
        }, 800)

    }

    return (
        <div>
            <h1>Register Component</h1>
            <form onSubmit={handleSubmit}>

                <button className='border p-2'>Register</button>

            </form>
        </div>
    )
}

export default Register
