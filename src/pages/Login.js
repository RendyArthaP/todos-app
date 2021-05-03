import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex flex-col p-4 w-full max-w-md m-auto h-screen justify-center">
      <h1 className="text-center font-bold text-xl">
        Login
      </h1>
      <form>
        <div>
          <div className="py-2">
            <label>
              Email
            </label>
            <input type="email" className="w-full h-8 border border-black rounded-md p-2 focus:outline-none" />
          </div>
          <div className="py-2">
            <label>
              Password
            </label>
            <input type="password" className="w-full h-8 border border-black rounded-md p-2 focus:outline-none" />
          </div>
          <div className="flex flex-col items-center">
            <button className="w-20 bg-black text-white py-1 rounded-md my-2">
              Submit
            </button>
            <div className="flex flex-row">
              <h1 className="mr-1">
                Don't have an account?
              </h1>
              <Link to="/register" className="underline">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
