import styled, { css } from 'styled-components'

const ImageQuestionContent = styled.img`
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 15px 0 15px 15px;
  cursor: pointer;
  display: block;
  padding: 2px;
  width: 100%;
  height: 100%;

  ${props => !props.images && css`
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-bottom: 20px;
  `}  
`

export default ImageQuestionContent