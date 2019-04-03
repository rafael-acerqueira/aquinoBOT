import React from 'react';

import ButtonBotcamp from './components/ButtonBotcamp'
import Logo from './components/LogoBotcamp'
import LoginWrapper from './components/LoginWrapper'

const App = () => (
  <LoginWrapper>
    <Logo />
    <ButtonBotcamp>Entrar</ButtonBotcamp>
  </LoginWrapper>
);

export default App;