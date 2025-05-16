import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1rem;
`;

const StyledSquare = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  background-color: ${({ color }) => (color ? 'lightblue' : 'darkblue')};
  margin-bottom: 0.625rem;
  border-radius: 1rem;
`;

export { StyledButton, StyledSquare };
