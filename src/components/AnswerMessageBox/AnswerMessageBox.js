import React from 'react'
import RobotBotcamp from '../RobotBotcamp'
import MessageBox from '../MessageBox'

import './style.css'

const AnswerMessageBox = ({ children }) => (
  <div className="answer-message-box">
    <RobotBotcamp />
    <MessageBox answer>{children}</MessageBox>
  </div>
)

export default AnswerMessageBox