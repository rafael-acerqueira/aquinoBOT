import React from 'react';

import ButtonBotcamp from '../../components/ButtonBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LoginWrapper from '../../components/LoginWrapper'


const Login = () => (
  <LoginWrapper>
    <LogoBotcamp width='248px' />
    <ButtonBotcamp>Entrar</ButtonBotcamp>
  </LoginWrapper>
);

export default Login;