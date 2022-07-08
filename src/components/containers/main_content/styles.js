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