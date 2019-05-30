import React from 'react'
import RobotBotcamp from '../RobotBotcamp'
import MessageBox from '../QuestionMessageBox/TextQuestion'
import WrapperAnswer from './WrapperAnswer'

const AnswerMessageBox = ({ children }) => (
  <WrapperAnswer>
    <RobotBotcamp />
    <MessageBox answer>{children}</MessageBox>
  </WrapperAnswer>
)

export default AnswerMessageBox