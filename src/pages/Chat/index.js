import React from 'react';
import { Link } from 'react-router-dom'


import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton';
import HeaderWrapper from '../../components/HeaderWrapper';
import SearchInput from '../../components/SearchInput';
import FooterWrapper from '../../components/FooterWrapper';
import BodyWrapper from '../../components/BodyWrapper';
import MessageBox from '../../components/MessageBox';
import AnswerMessageBox from '../../components/AnswerMessageBox/AnswerMessageBox'

const Chat = () => (
  <>
    <HeaderWrapper>
      <LogoBotcamp width='200px' />
      <Link to='/'>
        <LogoutButton />
      </Link>
    </HeaderWrapper>
    <BodyWrapper>
      <MessageBox>!cpf</MessageBox>
      <AnswerMessageBox>596.229.520-03</AnswerMessageBox>
      <MessageBox>!cnpj</MessageBox>
      <AnswerMessageBox>58.021.267/0001-45</AnswerMessageBox>
      <MessageBox>!cep</MessageBox>
      <AnswerMessageBox>76811-528</AnswerMessageBox>            
    </BodyWrapper>
    <FooterWrapper>
      <SearchInput placeholder="Diz aí..." type="text"/>
    </FooterWrapper>
  </>
)

export default Chat;