import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('mockup')
  }

  return (
    <div className="absolute top-[30%] left-[20px] md:left-[35%] .adjust">
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-[60px] h-[60px] bg-neutral text-white p-4 rounded-full">
            A
          </div>
          <span>Alvan AI</span>
        </div>

        <form onSubmit={handleSubmit} className="container mx-auto my-10 py-4 flex flex-col justify-center">
          <input
            type="text"
            placeholder="Type Username here"
            className="input input-bordered w-full max-w-xs mx-auto my-2"
          />
          <input
            type="text"
            placeholder="Type Password here"
            className="input input-bordered w-full max-w-xs mx-auto my-2"
          />
          <button className="btn btn-neutral w-full max-w-xs mx-auto my-2">Button</button>
        </form>
      </div>
    </div>
  );
}

export default Login
