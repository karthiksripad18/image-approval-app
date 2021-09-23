import styled from "styled-components";

export const MainImageContainer = styled.div`
    margin: auto;
    width: 80%;
    height: 300px;
    border-radius: 5px;
    background: ${({background}) => background.thumb? `url(${background.thumb})`: background }};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: 700px) {
        height: 500px;
        background: ${({background}) => background.regular? `url(${background.regular})`: background }};
    }
`;