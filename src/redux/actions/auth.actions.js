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

export const loginAction = (e, data, history) => (dispatch) => {
  e.preventDefault();
  dispatch(authRequest())

  return axios
    .post(process.env.REACT_APP_LOGIN, data)
    .then(result => {
      if(result.data.token !== undefined) {
        localStorage.token = result.data.token
        localStorage.payload = JSON.stringify(result.data.data);
        dispatch(loginSuccess(result.data.token))

        history.push('/home')
      }
    })
    .catch(error => dispatch(authFailed(error)))
}