import {REJECTED_IMAGES_ADD_IMAGE} from '../actions/actionTypes';

const rejectedImagesReducer = (state = [], action) => {
    switch (action.type) {
        case REJECTED_IMAGES_ADD_IMAGE:
            const newState = [...state, action.payload];
            sessionStorage.setItem('rejectedImages', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
}

export default rejectedImagesReducer;