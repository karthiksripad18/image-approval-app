import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        background-color: #3953e1;
    }
`;

export const Button = styled.button`
    border-radius: 25px;
    padding: 15px 50px;
    margin: 0 5px;
    background: ${({backgroundColor}) => backgroundColor};
    color: white;
    border: none;
    cursor: pointer;
    transition: transform .2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const HorizontalLine = styled.hr`
    width: 90%;
    opacity: 0.5;
    text-align: center;
    margin: 10px auto;
`;

export default GlobalStyle;