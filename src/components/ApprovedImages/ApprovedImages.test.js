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
    it ('Should render default icon', () => {
        const state = [];
    
        setUp (state);
        const headingElem = screen.getByText (/approved images/i);
        expect (headingElem).toBeInTheDocument();
    });
    
    it ('Should render Approved Images', () => {
        const state = [
            {id: "abcd1234", url : {smallSize: "https://images.unsplash.com/photo-1630350684325-2d245f34e2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIxNDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI3NDk2NTU&ixlib=rb-1.2.1&q=80&w=200", fullSize: "https://images.unsplash.com/photo-1630350684325-2d245f34e2bd?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNjIxNDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI3NDk2NTU&ixlib=rb-1.2.1&q=85"}, description: "test-item"},
        ]
    
        setUp (state);
        // console.log("###############", screen.getByRole("list"));
        expect (screen.getByRole("list")).toBeInTheDocument();
    
    });

    // it ('Should render Default Image Container', () => {
    //     const state = [
    //         {id: '-w9LXr97FA0', url: {fullSize: "https://images.unsplash.com/photo-1630350684325-2d245f34e2bd?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNjIxNDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI3NDk2NTU&ixlib=rb-1.2.1&q=85", smallSize: "https://images.unsplash.com/photo-1630350684325-2d245f34e2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIxNDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI3NDk2NTU&ixlib=rb-1.2.1&q=80&w=200"}, description: 'grayscale photo of girl climbing on spiral staircase', likes: 35, downloads: 5212}
    //     ];
    
    //     setUp (state);
    //     console.log("###############", screen.getByRole("listitem"));
    //     // expect (screen.getAllByRole("img").length).toEqual(2);
    
    // });
});