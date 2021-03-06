import axios from "axios";
import {
    MAIN_IMAGE_FETCH_LOADING, 
    MAIN_IMAGE_FETCH_SUCCESS, 
    MAIN_IMAGE_FETCH_FAILED,
    MAIN_IMAGE_REMOVE,
    APPROVED_IMAGES_ADD_IMAGE,
    REJECTED_IMAGES_ADD_IMAGE
} from './actionTypes';
import store from "../store/store";

export const fetchImage = () => {
    return async (dispatch) => {
        try {
            dispatch ({
                type: MAIN_IMAGE_FETCH_LOADING
            });
            const { data : { id, urls: {thumb, full}, alt_description} } = await axios.get(`https://api.unsplash.com/photos/random/?client_id=G1leH2R7_Ep6W99UUwh2I_Mn46hM2AT8Vw0Lf2dwI4E`);
            const imagePayload = {
                id,
                url: {
                    smallSize: thumb,
                    fullSize: full
                },
                description: alt_description
            };
            sessionStorage.setItem('mainImage', JSON.stringify(imagePayload));
            dispatch ({
                type: MAIN_IMAGE_FETCH_SUCCESS,
                payload: imagePayload
            });
        } catch (error) {
            dispatch ({
                type: MAIN_IMAGE_FETCH_FAILED,
                payload: error.response.data
            })
        }
    }
}

export const addToApprovedImages = (image) => {
    return (dispatch) => {
        dispatch ({
            type: APPROVED_IMAGES_ADD_IMAGE,
            payload: image
        });

        sessionStorage.setItem('mainImage', JSON.stringify({}));
        dispatch ({
            type: MAIN_IMAGE_REMOVE
        });
    }
}

export const addToRejectedImages = (imageId) => {
    return (dispatch) => {
        dispatch ({
            type: REJECTED_IMAGES_ADD_IMAGE,
            payload: imageId
        });
        dispatch ({
            type: MAIN_IMAGE_REMOVE
        });
        dispatch (fetchImage());

        // Fetch until Image is not in Rejected List
        while (isInRejectedImages(store.getState().mainImage.id)) {
            dispatch (fetchImage());
        }
    }
}

// Checks if given imageId is in Rejected Images List
const isInRejectedImages = (newImgId) => {
    const { rejectedImages } = store.getState();
    return rejectedImages.find (imgId => imgId === newImgId) !== undefined;
}