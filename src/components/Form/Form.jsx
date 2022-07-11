import React from 'react';
import usu_icon from './images/icon-user.svg'
import sen_icon from './images/icon-password.svg'
import { Div, DivExtern, DivIntern, Text, TitleForm } from './styles';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = () => {
  return (
    <React.Fragment>
        <DivExtern>
            <form autoComplete="off">
                <Div>
                    <div>
                        <Text>Olá,</Text>
                        <Text style={{ fontSize: '14px' }}>Para continuar navegando de forma<br/>segura, efetue o login na rede.</Text>
                    </div>
                    <DivIntern>
                        <TitleForm>Login</TitleForm>
                        <Input id='usuario' placeholder='Usuário' icon={usu_icon}/>
                        <Input id='senha' placeholder='Senha' icon={sen_icon} type='password'/>
                    </DivIntern>
                    <Button/>
                </Div>
            </form>
        </DivExtern>
    </React.Fragment>
  );
};

export default Form;
