import styled from 'styled-components';

import recordSvg from '../images/record.svg';

const LogoutButton = styled.img.attrs({
  src: recordSvg,
  alt: "Botão de sair"
})`
  background-color: #ee3e25;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 4px;
  width: 25px;
  height: 25px;
`;

export default LogoutButton