import React from "react";
import Input from './Input'
import usu_icon from './images/icon-user.svg'
import sen_icon from './images/icon-password.svg'
import { Div, TitleForm, DivIntern, Submit, DivExtern } from "./styles";
import TextForm from "./TextForm";

const Form = () => {
    return (
        <React.Fragment>
            <DivExtern>
                <form autoComplete="off">
                    <Div>
                        <TextForm/>
                        <DivIntern>
                            <TitleForm>Login</TitleForm>
                            <Input id='usuario' placeholder='Usuário' icon={usu_icon}/>
                            <Input id='senha' placeholder='Senha' icon={sen_icon} type='password'/>
                        </DivIntern>
                        <Submit type="submit">Continuar</Submit>
                    </Div>  
                </form>
            </DivExtern>
        </React.Fragment>
    );
};

export default Form