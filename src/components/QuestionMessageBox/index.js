import React from 'react'

import TextQuestion from './TextQuestion'
import ImageQuestion from './ImageQuestion'

const QuestionMessageBox = ({ content, type, images, onClick }) => {
  const questionTypes = {
    message: TextQuestion,
    image: ImageQuestion
  };
  const QuestionComponnent = questionTypes[type]
  return(
		type === 'message' 
		? 
    	<QuestionComponnent>{content}</QuestionComponnent>
		: 
			<QuestionComponnent src={content} imagesLength={images} onClick={type === 'image' ? onClick : null} />
	)	
}

export default QuestionMessageBox;
