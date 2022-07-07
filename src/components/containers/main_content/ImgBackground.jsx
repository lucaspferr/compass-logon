import React from "react";
import { BackgroundImage, BackgroundImageContainer } from "./styles";
import img from "./imagemfull.png";

const ImgBackground = () => {
    return(
        <BackgroundImageContainer>
            <BackgroundImage src={img}/>
        </BackgroundImageContainer>
    );
}

export default ImgBackground;