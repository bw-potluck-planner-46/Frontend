import { FETCH_POTLUCKS_START, FETCH_POTLUCKS_SUCCESS, FETCH_POTLUCKS_FAILURE, POST_POTLUCKS_START, POST_POTLUCKS_SUCCESS, POST_POTLUCKS_FAILURE } from '../actions'

const initialState = {
    potlucks: '',
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POTLUCKS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_POTLUCKS_SUCCESS:
            return {
                ...state,
                potlucks: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_POTLUCKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_POTLUCKS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_POTLUCKS_SUCCESS:
            return {
                ...state,
                potlucks: action.payload,
                isLoading: false,
                error: ''
            }
        case POST_POTLUCKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default reducer