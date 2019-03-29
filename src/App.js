import React from 'react';

import Button from './components/Button'
import Logo from './components/Logo'
import LoginWrapper from './components/LoginWrapper'
import logoSvg from './images/logo.svg';

const App = () => (
  <LoginWrapper>
    <Logo src={logoSvg} alt="Logo do Botcamp"/>
    <Button>Entrar</Button>
  </LoginWrapper>
);

export default App;