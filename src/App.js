import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/index'
import Chat from './pages/Chat';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/chat' component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default App;