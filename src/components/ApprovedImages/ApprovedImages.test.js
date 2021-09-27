import {render, screen} from '@testing-library/react';
import ApprovedImages from './ApprovedImages';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore({});

const setUp = (initialState) => {
    let store = mockStore({
        approvedImages: initialState
    });

    const rendered = render(
        <Provider store = {store}>
            <ApprovedImages />
        </Provider>
    );

    return rendered;
}

describe ("Approved Images Test Suite", () => {
    it ('Should render heading', () => {
        const state = [];
    
        setUp (state);
        const headingElem = screen.getByText (/approved images/i);
        expect (headingElem).toBeInTheDocument();
    });

    it ('Should render heading with correct number', () => {
        const state = [
            {id: "abcd1234", url : {smallSize: "", fullSize: ""}, description: ""},
            {id: "abcd1234", url : {smallSize: "", fullSize: ""}, description: ""},
        ];
    
        setUp (state);
        const headingElem = screen.getByText ("approved images (2)");
        expect (headingElem).toBeInTheDocument();
    });
    
    it ('Should render Approved Images', () => {
        const state = [
            {id: "abcd1234", url : {smallSize: "", fullSize: ""}, description: ""},
        ]
    
        setUp (state);
        expect (screen.getByRole ('list')).toBeInTheDocument();
    });
});