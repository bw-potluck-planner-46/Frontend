import axios from 'axios'

export const FETCH_POTLUCKS_START = 'FETCH_POTLUCKS_START'
export const FETCH_POTLUCKS_SUCCESS = 'FETCH_POTLUCKS_SUCCESS'
export const FETCH_POTLUCKS_FAILURE = 'FETCH_POTLUCKS_FAILURE'
export const fetchPotlucks = () => (dispatch) => {
    dispatch({type: FETCH_POTLUCKS_START})
    axios
        .get('https://www.POTLUCKS.com')
        .then(response => {dispatch({type: FETCH_POTLUCKS_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: FETCH_POTLUCKS_FAILURE, payload: error.response}))
}

export const POST_POTLUCKS_START = 'POST_POTLUCKS_START'
export const POST_POTLUCKS_SUCCESS = 'POST_POTLUCKS_SUCCESS'
export const POST_POTLUCKS_FAILURE = 'POST_POTLUCKS_FAILURE'
export const postPotlucks = (potluck) => (dispatch) => {
    dispatch({type: POST_POTLUCKS_START})
    axios
        .post('https://www.POTLUCKS.com', potluck)
        .then(response => {dispatch({type: POST_POTLUCKS_SUCCESS, payload: response.data})})
        .catch(error => dispatch({type: POST_POTLUCKS_FAILURE, payload: error.response}))
}