import React from "react";
import Countdown from "../Countdown/Countdown";
import {
  HomeFooterButtonKeep,
  HomeFooterButtonLog,
  HomeFooterButtonContainer,
  HomeFooterContainer,
  HomeFooterText,
} from "./styles";

const HomeFooter = () => {
  return (
    <HomeFooterContainer>
      <HomeFooterText>
        Essa janela do navegador é usada para manter sua sessão de autenticação
        ativa.
        <br />
        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a
        navegar.
      </HomeFooterText>
      <Countdown />
      <HomeFooterButtonContainer>
        <HomeFooterButtonKeep>Continuar Navegando</HomeFooterButtonKeep>
        <HomeFooterButtonLog>Logout</HomeFooterButtonLog>
      </HomeFooterButtonContainer>
    </HomeFooterContainer>
  );
};

export default HomeFooter;
