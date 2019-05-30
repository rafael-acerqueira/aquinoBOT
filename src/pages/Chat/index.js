import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'


import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutButton from '../../components/LogoutButton';
import HeaderWrapper from '../../components/HeaderWrapper';
import SearchInput from '../../components/SearchInput';
import FooterWrapper from '../../components/FooterWrapper';
import BodyWrapper from '../../components/BodyWrapper';
import MessageBox from '../../components/MessageBox'

class Chat extends Component {

  state = {
    commandMessages: [],
    searchInputText: ''
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {

      const { commandMessages, searchInputText } = this.state

      this.setState({ 
        commandMessages: [
          ...commandMessages, 
          {
            id: uuidv4(),
            text: searchInputText
          }
        ],
        searchInputText: ''
      })
    }
  }

  onChange = (e) => {
    this.setState({ searchInputText: e.target.value })
  }
  
  render() {

    const { commandMessages, searchInputText } = this.state

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
            onKeyDown={this.onKeyDown}
            onChange={this.onChange} 
            value={searchInputText}  
            placeholder="Diz aí..." 
            type="text"
          />
        </FooterWrapper>
      </>
    )
  }
}

export default Chat;