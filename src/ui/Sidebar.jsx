import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 3.2rem;
  padding: 3.2rem 2.4rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 26rem;
    z-index: 1000;
    padding: 2.4rem 1.6rem;
    transform: ${(props) =>
      props.showSidebar ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: ${(props) =>
      props.showSidebar ? "2px 0 10px rgba(0, 0, 0, 0.1)" : "none"};
  }

  @media (max-width: 480px) {
    width: 24rem;
    padding: 2rem 1.2rem;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <Overlay show={showSidebar} onClick={() => setShowSidebar(false)} />
      <StyledSidebar showSidebar={showSidebar}>
        <Logo />
        <MainNav setShowSidebar={setShowSidebar} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
