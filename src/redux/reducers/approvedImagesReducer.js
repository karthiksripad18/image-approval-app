import {APPROVED_IMAGES_ADD_IMAGE, APPROVED_IMAGES_REMOVE_IMAGE} from '../actions/actionTypes';

const approvedImagesReducer = (state = ['Helloworld'], action) => {
    switch (action.type) {
        case APPROVED_IMAGES_ADD_IMAGE:
            // Check if Image already exists in the list
            const image = state.find (({id}) => id === action.payload.id);
            
            if (!image) {
                const newState = [...state, action.payload];
                sessionStorage.setItem('approvedImages', JSON.stringify(newState));
                return newState;
            }
            return state;

        case APPROVED_IMAGES_REMOVE_IMAGE:
            let imageIdx = state.findIndex ((image) => image.id === action.payload.id);
            const newState = [...state.slice (0, imageIdx), ...state.slice (imageIdx + 1)];
            sessionStorage.setItem('approvedImages', JSON.stringify(newState));
            return newState;
        default:
            return [];
    }
};

export default approvedImagesReducer;