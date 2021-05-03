import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { registerAction } from '../redux/actions/auth.actions';
import { useDispatch } from 'react-redux'; 

const Register = () => {
  // const registAction = useSelector(state => state.handleAuth)
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value
    })
  }

  const handleFormRegister = (e) => {
    e.preventDefault();
    if(e.target.value === "") {
      alert("Please input your data")
    } else if(registerUser.password !== registerUser.password_confirmation) {
      alert('Your password not match')
    } else {
      dispatch(registerAction(e, registerUser, history))
    }
  }

  useEffect(() => {}, [registerUser])

  return (
    <div className="flex flex-col p-4 w-full max-w-md m-auto h-screen justify-center">
      <h1 className="text-center font-bold text-xl">
        Register
      </h1>
      <form onSubmit={handleFormRegister}>
        <div>
          <div className="py-2">
            <label>
              Name
            </label>
            <input 
              type="text" 
              className="w-full h-8 border border-black rounded-md p-2 focus:outline-none"
              value={registerUser.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="py-2">
            <label>
              Email
            </label>
            <input 
              type="email" 
              className="w-full h-8 border border-black rounded-md p-2 focus:outline-none"
              value={registerUser.email}
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
              value={registerUser.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="py-2">
            <label>
              Re-Password
            </label>
            <input 
              type="password" 
              className="w-full h-8 border border-black rounded-md p-2 focus:outline-none" 
              value={registerUser.password_confirmation}
              onChange={handleChange}
              name="password_confirmation"
            />
          </div>
          <div className="flex flex-col items-center">
            <button 
              className="w-20 bg-black text-white py-1 rounded-md my-2 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
            <div className="flex flex-row">
              <h1 className="mr-1">
                Have an account?
              </h1>
              <Link to="/" className="underline">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
