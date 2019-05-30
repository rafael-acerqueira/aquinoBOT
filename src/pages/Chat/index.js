import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'


import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton'
import UploadBox from '../../components/UploadBox'
import HeaderWrapper from '../../components/HeaderWrapper'
import SearchInput from '../../components/SearchInput'
import FooterWrapper from '../../components/FooterWrapper'
import BodyWrapper from '../../components/BodyWrapper'
import QuestionMessageBox from '../../components/QuestionMessageBox'

const Chat = () => {
  const [commandMessages, setCommandMessages] = useState([])
  const [searchInputText, setSearchInputText] = useState('')

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCommandMessages( messages => [...messages, {
        id: uuidv4(),
        content: searchInputText,
        type: 'message'
      }])
      setSearchInputText('')
    }
  }

  const onChange = (e) => {
    setSearchInputText(e.target.value)
  }

  const handleUpload = (e) => {
    e.persist()
    setCommandMessages( messages => [...messages, {
      id: uuidv4(),
      content: URL.createObjectURL(e.target.files[0]),
      type: 'image'
    }])    
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
          commandMessages.map(
            message => 
              <QuestionMessageBox
                key={message.id} 
                content={message.content} 
                type={message.type}
              />
          )    
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
        <UploadBox handleUpload={handleUpload}/>
      </FooterWrapper>
    </>
  )
}
export default Chat;