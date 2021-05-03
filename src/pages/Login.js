import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { loginAction } from '../redux/actions/auth.actions';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const dataUserLogin = useSelector((state) => state.handleAuth)
  console.log(dataUserLogin)
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const [fail, setFail] = useState({
    result: true
  })

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value
    })
  }

  const handleFormLogin = (e) => {
    e.preventDefault();
    if(loginUser.email === "" || loginUser.password === "") {
      alert('Please input your data')
    } else {
      dispatch(loginAction(e, loginUser, history, setFail))
    }
  }

  return (
    <div className="flex flex-col p-4 w-full max-w-md m-auto h-screen justify-center">
      <h1 className="text-center font-bold text-xl">
        Login
      </h1>
      {fail.result === false 
        ? 
          <div>
            <h1 className="text-red-500 text-center text-base">
              Your email or password are wrong.
            </h1>
          </div>
        :
          null
      }
      <form>
        <div>
          <div className="py-2">
            <label>
              Email
            </label>
            <input 
              type="email" 
              className="w-full h-8 border border-black rounded-md p-2 focus:outline-none" 
              value={loginUser.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="py-2">
            <label>
              Password
            </label>
            <input 
              type="password" 
              className="w-full h-8 border border-black rounded-md p-2 focus:outline-none" 
              value={loginUser.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="flex flex-col items-center">
            <button 
              className="w-20 bg-black text-white py-1 rounded-md my-2 focus:outline-none"
              type="button"
              onClick={handleFormLogin}
            >
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
