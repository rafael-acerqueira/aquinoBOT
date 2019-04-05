import React from 'react';

import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton';
import HeaderWrapper from '../../components/HeaderWrapper';

const Chat = () => (
  <HeaderWrapper>
    <LogoBotcamp width='200px' />
    <LogoutButton />
  </HeaderWrapper>
)

export default Chat;