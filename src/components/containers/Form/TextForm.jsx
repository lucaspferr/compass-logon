import React from "react";
import { Text } from "./styles";

const TextForm = () => {
  return (
    <div>
        <Text>Olá,</Text>
        <Text style={{ fontSize: '16px' }}>Para continuar navegando de forma<br/>segura, efetue o login na rede.</Text>
    </div>
  );
}

export default TextForm;