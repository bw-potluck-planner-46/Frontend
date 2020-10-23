import axiosWithAuth from '../utils/AxiosWithAuth'
import axios from'axios'

// /api/auth/register
export const POST_USER_START = 'POST_USER_START'
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'
export const POST_USER_FAILURE = 'POST_USER_FAILURE'
export const postUser = (user) => (dispatch) => {
    dispatch({type: POST_USER_START})
    axios()
        .post('/api/auth/register', user)
        .then(response => {dispatch({type: POST_USER_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: POST_USER_FAILURE, payload: error.response}))
}

// /api/auth/login
export const POST_LOGIN_START = 'POST_LOGIN_START'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
export const postLogin = (user) => (dispatch) => {
    dispatch({type: POST_LOGIN_START})
    axiosWithAuth()
        .post('/api/auth/register', user)
        .then(response => 
            
            console.log("login response:", response)
            // {dispatch({type: POST_LOGIN_SUCCESS, payload: response.data})}
            )
        .catch(error => 
            console.log("login error:", error)
            // {dispatch({type: POST_LOGIN_FAILURE, payload: error.response})}
            )
}

export const FETCH_POTLUCKS_START = 'FETCH_POTLUCKS_START'
export const FETCH_POTLUCKS_SUCCESS = 'FETCH_POTLUCKS_SUCCESS'
export const FETCH_POTLUCKS_FAILURE = 'FETCH_POTLUCKS_FAILURE'
export const fetchPotlucks = () => (dispatch) => {
    dispatch({type: FETCH_POTLUCKS_START})
    axiosWithAuth()
        .get('https://www.POTLUCKS.com')
        .then(response => {dispatch({type: FETCH_POTLUCKS_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: FETCH_POTLUCKS_FAILURE, payload: error.response}))
}

export const POST_POTLUCKS_START = 'POST_POTLUCKS_START'
export const POST_POTLUCKS_SUCCESS = 'POST_POTLUCKS_SUCCESS'
export const POST_POTLUCKS_FAILURE = 'POST_POTLUCKS_FAILURE'
export const postPotlucks = (potluck) => (dispatch) => {
    dispatch({type: POST_POTLUCKS_START})
    axiosWithAuth()
        .post('https://www.POTLUCKS.com', potluck)
        .then(response => {dispatch({type: POST_POTLUCKS_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: POST_POTLUCKS_FAILURE, payload: error.response}))
}