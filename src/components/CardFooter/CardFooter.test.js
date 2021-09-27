import {render, screen} from '@testing-library/react';
import CardFooter from './CardFooter';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore({});

const setUp = (initialState) => {
    let store = mockStore({
        mainImage: initialState
    });

    const rendered = render(
        <Provider store = {store}>
            <CardFooter />
        </Provider>
    );

    return rendered;

}

describe ("Card Footer Test Suite", () => {
    it ('Should render Error Text', () => {
        const state = {
            loading: false,
            error: "Rate limit Exceeded",
            image: {}
        };
    
        setUp (state);
        expect (screen.getByTestId ("error-text")).toBeInTheDocument();
    });
    
    it ('Should render Card Footer Text', () => {
        const state = {
            loading: false,
            error: null,
            image: {}
        };
    
        setUp (state);
        expect (screen.getByText (/click on the/i)).toBeInTheDocument();
    
    });
    
    it ('Should render Buttons Container', () => {
        const state = {
            loading: false,
            error: null,
            image: {
                id: 'abcd1234',
                url: {
                    smallSize: "",
                    largeSize: ""
                },
                description: "",
                likes: 1,
                downloads: 2
            }
        };
    
        setUp (state);
        expect (screen.getAllByRole("button").length).toEqual(2);
    });
});