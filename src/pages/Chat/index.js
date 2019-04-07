import React from 'react';
import { Link } from 'react-router-dom'


import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton';
import HeaderWrapper from '../../components/HeaderWrapper';
import SearchInput from '../../components/SearchInput';
import FooterWrapper from '../../components/FooterWrapper';

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp width='200px' />
      <Link to='/'>
        <LogoutButton />
      </Link>
    </HeaderWrapper>
    <FooterWrapper>
      <SearchInput placeholder="Diz aí..." type="text"/>
    </FooterWrapper>
  </>
)

export default Chat;