import {APPROVED_IMAGES_ADD_IMAGE, APPROVED_IMAGES_REMOVE_IMAGE} from '../actions/actionTypes';

const approvedImagesReducer = (state = [], action) => {
    switch (action.type) {
        case APPROVED_IMAGES_ADD_IMAGE:
            // Check if Image already exists
            const image = state.find (({id}) => id === action.payload.id);
            
            if (!image) {
                return [...state, action.payload];
            }
            return state;

        case APPROVED_IMAGES_REMOVE_IMAGE:
            let imageIdx = state.findIndex ((image) => image.id === action.payload.id);
            return [...state.slice (0, imageIdx), ...state.slice (imageIdx + 1)];
        default:
            return state;
    }
};

export default approvedImagesReducer;