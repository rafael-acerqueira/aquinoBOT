import styled from 'styled-components';

import logoSvg from '../images/logo.svg';

const LogoBotcamp = styled.img.attrs({
  src: logoSvg, alt: "Logo do Botcamp"
})`
  width: ${props => props.width};
`;

export default LogoBotcamp;