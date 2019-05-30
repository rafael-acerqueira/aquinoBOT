import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'


import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton';
import HeaderWrapper from '../../components/HeaderWrapper';
import SearchInput from '../../components/SearchInput';
import FooterWrapper from '../../components/FooterWrapper';
import BodyWrapper from '../../components/BodyWrapper';
import MessageBox from '../../components/MessageBox'

const Chat = () => {
  const [commandMessages, setCommandMessages] = useState([])
  const [searchInputText, setSearchInputText] = useState('')

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCommandMessages( messages => [...messages, {
        id: uuidv4(),
        text: searchInputText
      }])
      setSearchInputText('')
    }
  }

  const onChange = (e) => {
    setSearchInputText(e.target.value)
  }

  return(
    <>
      <HeaderWrapper>
        <LogoBotcamp width='200px' />
        <Link to='/'>
          <LogoutButton />
        </Link>
      </HeaderWrapper>
      <BodyWrapper>
        {
          commandMessages.map(message => <MessageBox key={message.id}>{message.text}</MessageBox>)
        }
      </BodyWrapper>
      <FooterWrapper>
        <SearchInput 
          onKeyDown={onKeyDown}
          onChange={onChange} 
          value={searchInputText}  
          placeholder="Diz aí..." 
          type="text"
        />
      </FooterWrapper>
    </>
  )
}
export default Chat;