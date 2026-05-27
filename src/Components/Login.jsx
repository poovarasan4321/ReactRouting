import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    setTimeout(() => {

      toast.success("Re-directing to the home page")
      navigate("/")

    }, 800);

  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <h1>Login Component</h1>

      <form onSubmit={handleSubmit} >

        <button className='border p-2'>Login</button>

      </form>

    </div>
  )
}

export default Login
