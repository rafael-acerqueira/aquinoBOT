import React from 'react'
import ImageQuestionContent from './ImageQuestionContent'
import ImageQuestionMask from './ImageQuestionMask'
import ImageQuestionWrapper from './ImageQuestionWrapper'

const ImageQuestion = ({ src, imagesLength, onClick }) => {
  return (
    imagesLength > 0
      ?
        (
          <ImageQuestionWrapper>
            <ImageQuestionContent src={src} images={imagesLength} />
            <ImageQuestionMask onClick={onClick}>mais {imagesLength - 1}</ImageQuestionMask>
          </ImageQuestionWrapper>
        )
      :
        <ImageQuestionContent src={src} images={imagesLength} onClick={onClick} />
    
  )
}

export default ImageQuestion