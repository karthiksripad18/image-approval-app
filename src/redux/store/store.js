import { combineReducers, createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import mainImageReducer from '../reducers/mainImageReducer';
import approvedImagesReducer from '../reducers/approvedImagesReducer';

const middlewares = [thunk];

const reducer = combineReducers({
    mainImage: mainImageReducer,
    approvedImages: approvedImagesReducer
});

const initialState = {
    mainImage: { loading: false, image: {}, error: null},
    approvedImages: []
};

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;