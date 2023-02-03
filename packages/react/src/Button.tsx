import { tokens } from '@newline-ds/foundation';
import styled from 'styled-components';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Color based on the color props */
  color: keyof typeof tokens.colors;
}

const ButtonStyled = styled.button<ButtonProps>`
  /* Static styles */
  all: unset;
  cursor: pointer;
  padding: 8px 20px;
  &:disabled {
    opacity: 40%;
  }
  /* Inherit from design tokens */
  transition: ${tokens.animations.default.value};
  color: ${tokens.colors.neutral.white.value};
  border-radius: ${tokens.radius.large.value};
  background-color: ${(props) => tokens.colors[props.color][500].value};
  &:hover {
    background-color: ${(props) => tokens.colors[props.color][700].value};
  }
  &:active {
    background-color: ${(props) => tokens.colors[props.color][800].value};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ disabled, loading, color = 'primary', ...rest }, ref) {
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
