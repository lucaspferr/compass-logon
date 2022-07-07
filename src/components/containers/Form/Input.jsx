import React from "react";
import { ContainerForm, InputForm, IconForm } from "./styles";

const Input = ({id, placeholder, icon, ...extraConfigs}) => {
    return (
        <ContainerForm>
            <InputForm placeholder={placeholder} id={id} {...extraConfigs}/>
            <IconForm src={icon}/>
        </ContainerForm>
    );
};

export default Input