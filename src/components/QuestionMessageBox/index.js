import React from 'react'

import TextQuestion from './TextQuestion'
import ImageQuestion from './ImageQuestion'

const QuestionMessageBox = ({ content, type }) => {
  const questionTypes = {
    message: TextQuestion,
    image: ImageQuestion//,
    // audio: AudioQuestion
  };
  const QuestionComponnent = questionTypes[type]
  return(
		type === 'message' 
		? 
    	<QuestionComponnent>{content}</QuestionComponnent>
		: 
			<QuestionComponnent src={content} />
	)	
}

export default QuestionMessageBox;
