import React from "react";
import Form from "../form/Form";
import ImgBackground from "./ImgBackground";
import { Container, CompassLogo } from "./styles";
import logo from "./compassuol-logo-white.svg";

const LogonCompass = () => {

    return(
        <Container>
            <Form/>
            <ImgBackground/>
            <CompassLogo src={logo}/>
        </Container>
    );
}

export default LogonCompass;