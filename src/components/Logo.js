import styled from 'styled-components';

import logoSvg from '../images/logo.svg';

const Logo = styled.img.attrs({
  src: logoSvg, alt: "Logo do Botcamp"
})`
  width: 248px;
`;

export default Logo;