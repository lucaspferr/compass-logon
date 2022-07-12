import styled from "styled-components";

export const HomeFooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100px;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    position: absolute;
    bottom: 0;
`;

export const HomeFooterText = styled.p`
    height: 50px;
    border-right: 2px solid #fff;
    font-size: 12px;
    font-weight: 400;
    color: white;
    margin: 0;
    padding-left: 100px;
    padding-right: 20px;
    text-align: center;
    vertical-align: center;
    font-family: 'Poppins', sans-serif;
`;

export const HomeFooterButtonContainer = styled.div`
    width: 240px;
    height: 100px;
    display: flex;

`;

export const HomeFooterButtonKeep = styled.button`
    height: 100px;
    width: 120px;
    font-size: 12px;
    font-weight: 400;
    border: 0px;
    color: #C13216;
    line-height: 18px;
    background: #FFFFFF;
    
`;

export const HomeFooterButtonLog = styled.button`
    height: 100px;
    width: 120px;
    font-size: 12px;
    font-weight: 700;
    border: 0px;
    color: #fff;
    background: transparent;
`;