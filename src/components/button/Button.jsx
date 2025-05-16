import { useState } from 'react';
import { StyledButton, StyledSquare } from './buttonStyles';

const Button = () => {
  const [lightColor, setLightColor] = useState(true);

  return (
    <>
      <StyledSquare color={lightColor} />
      <StyledButton onClick={() => setLightColor(!lightColor)}>
        CAMBIO DE COLOR
      </StyledButton>
    </>
  );
};

export default Button;
