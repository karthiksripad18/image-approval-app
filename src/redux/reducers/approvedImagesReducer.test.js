import {
    APPROVED_IMAGES_ADD_IMAGE,
    APPROVED_IMAGES_REMOVE_IMAGE
} from '../actions/actionTypes';
import approvedImagesReducer from './approvedImagesReducer';

describe ('Approved Images Reducer', () => {

    it ('Should return default state', () => {
        const newState = approvedImagesReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it ('Should add and return incremented state', () => {
        const imagePayload = {
            id: 'abc1234',
            url: {},
            description: ""
        };
        const newState = approvedImagesReducer ([], {type: APPROVED_IMAGES_ADD_IMAGE, payload: imagePayload});
        expect(newState.length).toEqual(1);
    });

    it ('Should remove and return the state', () => {
        const state = [{id: 'abcd1234', description: "", url: {}}];
        const newState = approvedImagesReducer (state, {type: APPROVED_IMAGES_REMOVE_IMAGE, payload: {id: 'abcd1234'}});
        expect(newState.length).toEqual(0);
    });
});