import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 600px) {
    flex-direction: column; /* Change to column for smaller screens */
  }
`;

export default TableOperations;
