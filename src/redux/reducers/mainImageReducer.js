import { 
    MAIN_IMAGE_FETCH_LOADING, 
    MAIN_IMAGE_FETCH_SUCCESS, 
    MAIN_IMAGE_FETCH_FAILED,
    MAIN_IMAGE_REMOVE
} from '../actions/actionTypes';

const mainImageReducer = (state = {}, action) => {
    switch (action.type) {
        case MAIN_IMAGE_FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
        case MAIN_IMAGE_FETCH_SUCCESS:
            return {
                loading: false,
                image: action.payload,
                error: null
            }
        case MAIN_IMAGE_FETCH_FAILED:
            return {
                image: {},
                loading: false,
                error: action.payload
            }
        case MAIN_IMAGE_REMOVE:
            return {
                image: {},
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

export default mainImageReducer;