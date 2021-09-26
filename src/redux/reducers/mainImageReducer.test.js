import mainImageReducer from './mainImageReducer';

describe ('Main Image Reducer', () => {
    it ('Should return default state', () => {
        const newState = mainImageReducer(undefined, {});
        expect(newState).toEqual({});
    })
});