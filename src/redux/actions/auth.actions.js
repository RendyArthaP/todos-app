import axios from 'axios'

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_FAILED = "AUTH_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGUT";

export const authRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}

export const authFailed = (error) => {
  return {
    type: AUTH_FAILED,
    error
  }
}

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  }
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}

export const logoutAction = () => {
  return {
    type: LOGOUT
  }
}

export const registerAction = (e, data, history) => (dispatch) => {
  e.preventDefault();
  dispatch(authRequest())

  return axios
    .post(process.env.REACT_APP_REGISTER, data)
    .then(result => {
      dispatch(registerSuccess(result.data))
      history.push('/')
    })
    .catch(error => dispatch(authFailed(error)))
  
}

export const loginAction = (e, data, history, setFail) => (dispatch) => {
  e.preventDefault();
  dispatch(authRequest())

  return axios
    .post(process.env.REACT_APP_LOGIN, data)
    .then(result => {
      console.log(result)
      if(result.data.auth_token !== undefined) {
        localStorage.token = result.data.auth_token
        dispatch(loginSuccess(result.data.auth_token))
        
        history.push('/home')
      } else {
        setFail({
          result: false
        })
        dispatch(authFailed("Invalid"))
      }
    })
    .catch(error => dispatch(authFailed(error)))
}