import React from 'react'
import img from "./images/imagemfull.png";
import { BackgroundImage, BackgroundImageContainer } from './style';


const ImageBackground = () => {
  return (
    <BackgroundImageContainer>
        <BackgroundImage src={img}/>
    </BackgroundImageContainer>
  );
}

export default ImageBackground;
