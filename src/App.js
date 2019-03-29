import React from 'react';

import Button from './components/Button'
import Logo from './components/Logo'
import LoginWrapper from './components/LoginWrapper'

const App = () => (
  <LoginWrapper>
    <Logo />
    <Button>Entrar</Button>
  </LoginWrapper>
);

export default App;