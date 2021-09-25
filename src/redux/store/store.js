import { combineReducers, createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import mainImageReducer from '../reducers/mainImageReducer';
import approvedImagesReducer from '../reducers/approvedImagesReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    mainImage: mainImageReducer,
    approvedImages: approvedImagesReducer
});

/*
    Assigning Initial State depending on the data in Session Storage
*/
const initialState = {
    mainImage: { 
        loading: false,
        image: sessionStorage.getItem('mainImage')? JSON.parse(sessionStorage.getItem('mainImage')): {},
        error: null
    },
    approvedImages: sessionStorage.getItem('approvedImages')? JSON.parse(sessionStorage.getItem('approvedImages')): []
};

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;