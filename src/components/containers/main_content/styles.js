import styled from "styled-components";

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;

`;

export const BackgroundImageContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }

`;

export const Container = styled.div`
    display: flex;
    max-height: 100vh;
`;

export const CompassLogo = styled.img`
    position: absolute;
    top: 2vh;
    width: 250px;
    left: calc(75vw - 125px);

    @media (max-width: 768px) {
        width: 250px;
        left: calc(50vw - 125px);
    }
`;