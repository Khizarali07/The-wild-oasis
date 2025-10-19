import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  width: 100%;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 1.6rem;
  min-height: 12rem;

  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;

  @media (max-width: 768px) {
    padding: 1.4rem;
    min-height: 10rem;
    grid-template-columns: 5.6rem 1fr;
    column-gap: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    min-height: 9rem;
    grid-template-columns: 5rem 1fr;
    column-gap: 1rem;
  }
`;

const Icon = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }

  @media (max-width: 768px) {
    width: 5.6rem;
    height: 5.6rem;

    & svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  @media (max-width: 480px) {
    width: 5rem;
    height: 5rem;

    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
