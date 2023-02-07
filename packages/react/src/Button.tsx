import styled from 'styled-components';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Color based on the color props */
  color: "red" | "blue" | "gray";
}

const ButtonStyled = styled.button<ButtonProps>`
  /* Static styles */
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  &:disabled {
    opacity: 40%;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ disabled, loading, color = 'blue', ...rest }, ref) {
    return (
      <ButtonStyled
        {...rest}
        ref={ref}
        color={color}
        disabled={disabled || loading}
      />
    );
  }
);

// Button.displayName = 'Button';

// export default Button;
