import styled from "styled-components";

export const MainImageContainer = styled.div`
    position: relative;
    margin: auto;
    width: 300px;
    height: 380px;
    border-radius: 5px;
    background: ${({background}) => background? background: null }};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
`;