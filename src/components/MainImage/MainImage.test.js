import {render, screen} from '@testing-library/react';
import MainImage from './MainImage';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore({});

const setUp = (initialState) => {
    let store = mockStore({
        mainImage: initialState
    });

    const rendered = render(
        <Provider store = {store}>
            <MainImage />
        </Provider>
    );

    return rendered;

}

describe ("Main Image Test Suite", () => {
    it ('Should render loader', () => {
        const state = {
            loading: true,
            error: null,
            image: {
                id: 'abcd1234',
                url: {},
                description: "",
                likes: 1,
                downloads: 2
            }
        };
    
        setUp (state);
        expect (screen.getByTestId ("loader-div")).toBeInTheDocument();
    });
    
    it ('Should render Image tag', () => {
        const state = {
            loading: false,
            error: null,
            image: {
                id: 'abcd1234',
                url: {},
                description: "",
                likes: 1,
                downloads: 2
            }
        };
    
        setUp (state);
        expect (screen.getByRole("img")).toBeInTheDocument();
    
    });
    
    it ('Should render Plus icon', () => {
        const state = {
            loading: false,
            error: null,
            image: {
                id: undefined,
                url: {},
                description: "",
                likes: 1,
                downloads: 2
            }
        };
    
        setUp (state);
        expect (screen.getByTestId ("plus-icon")).toBeInTheDocument();
    
    });
});
