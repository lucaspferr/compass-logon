import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    background: #26292c;
    border: 1px solid #ffffff;
`;

export const InputForm = styled.input`
    border-radius: 50px;
    background: transparent;
    border: transparent;
    color: #E0E0E0;
    font-family: 'Poppins', sans-serif;
    width: 240px;
    font-size: 16px;
    padding-left: 20px;
    &:focus{
        outline-width: 0;
    }
`;

export const IconForm = styled.img`
    width: 15px;
    padding-left: 5px;
`;

export const TitleForm = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    color: #E0E0E0;
`;

export const Text = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    color: #E0E0E0;
`;

export const DivIntern = styled.div`
    display: flex;
    height: 200px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding-bottom: 10vh;
    
    align-items: flex-start;
    justify-content: space-evenly;
    min-width: 300px;

    @media (max-width: 768px) {
        margin-top: 10vh;
        height: 85vh;
        padding-bottom: 5vh;
    }
    
    
`;

export const DivExtern = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 50vw;
    height: 100%;
    align-items: center;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);

    @media (max-width: 768px) {
        width: 100vw;
    }
`;

export const Submit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(#FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px #00000026;
    border: transparent;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 700;
`;
