import styled from "styled-components";

export const ApprovedImagesContainer = styled.div`
    min-height: 100px
`;

export const ApprovedImageTitle = styled.p`
    text-align: left;
    margin-left: 20px;
    color: #3953e1;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    padding: 10px 0px;
`;

export const ApprovedItem = styled.div`
    
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 10px;
    width: 60px;
    height: 40px;
    overflow: hidden;
    background: ${({background}) => background};
`;

export const CloseIcon = styled.span`
    position: absolute;
    content: "";
    top: 0px;
    right: 2px;
`;