import React from 'react'
import RobotBotcamp from '../RobotBotcamp'
import MessageBox from '../MessageBox'
import MessageBoxWrapper from './MessageBoxWrapper'

const AnswerMessageBox = ({ children }) => (
  <MessageBoxWrapper>
    <RobotBotcamp />
    <MessageBox answer>{children}</MessageBox>
  </MessageBoxWrapper>
)

export default AnswerMessageBox