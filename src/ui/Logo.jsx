import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  width: 100%;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 768px) {
    height: 7.2rem;
  }

  @media (max-width: 480px) {
    height: 6rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
