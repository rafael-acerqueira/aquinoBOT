import React from 'react';
import './App.css'

import Button from './components/Button'
import { ReactComponent as Logo } from './images/logo.svg'

const App = () => (
  <div className='wrapper'>
    <Logo />
    <Button />
  </div>
);

export default App;