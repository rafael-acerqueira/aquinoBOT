import React from 'react'

import TextQuestion from './TextQuestion'
import ImageQuestion from './ImageQuestion'

const QuestionMessageBox = ({ content, type, images, onClick }) => {
  const questionTypes = {
    text: TextQuestion,
    image: ImageQuestion
  };
  const QuestionComponnent = questionTypes[type]
  return(
		type === 'text' 
		? 
    	<QuestionComponnent>{content}</QuestionComponnent>
		: 
			<QuestionComponnent src={content} imagesLength={images} onClick={type === 'image' ? onClick : null} />
	)	
}

export default QuestionMessageBox;
