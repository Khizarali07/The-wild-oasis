import styled from "styled-components";
import { HiOutlineBars3 } from "react-icons/hi2";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    padding: 1.2rem 3rem;
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1.6rem;
    gap: 1.2rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    gap: 1rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  color: var(--color-grey-600);
  transition: all 0.3s;

  &:hover {
    color: var(--color-brand-600);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

function Header({ showSidebar, setShowSidebar }) {
  return (
    <StyledHeader>
      <HamburgerButton onClick={() => setShowSidebar(!showSidebar)}>
        <HiOutlineBars3 />
      </HamburgerButton>
      <RightSection>
        <UserAvatar />
        <HeaderMenu />
      </RightSection>
    </StyledHeader>
  );
}

export default Header;
