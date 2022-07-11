import React from "react";
import Form from "../../components/Form/Form";
import ImageBackground from "../../components/ImagesAndIcons/ImageBackground";
import { CompassLogo } from "../../components/ImagesAndIcons/style";
import { Container } from "./styles";

const LogonPage = () => {

    return(
        <Container>
            <Form/>
            <ImageBackground/>
            <CompassLogo/>
        </Container>
    );
}

export default LogonPage;