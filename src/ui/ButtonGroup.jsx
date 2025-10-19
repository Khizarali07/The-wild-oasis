import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;

    & button {
      width: 100%;
    }
  }
`;

export default ButtonGroup;
