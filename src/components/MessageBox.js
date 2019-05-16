import styled, { css } from 'styled-components';

const MessageBox = styled.span`
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 15px 0 15px 15px;
  color: #FFF;
  display: block;
  font-family: Roboto;
  font-size: 16px;
  margin-left: auto;
  margin-bottom: 20px;
  line-height: 40px;
  padding-left: 14px;
  width: 75%;
  height: 40px;

  ${props => props.answer && css`
    background-color: rgba(255, 255, 255, 0.83);
    border-radius: 0 15px 15px 15px;
    color: #333333;
    margin-left: 10px;
    margin-bottom: unset;
  `}
`;

export default MessageBox;