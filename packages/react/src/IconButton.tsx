import { tokens } from '@newline-ds/foundation';
import styled from 'styled-components';
import { forwardRef } from 'react';

export interface IconButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Aria title should be mandatory for icon buttons */
  'aria-label'?: string;
  /** Color based on the color props */
  color: keyof typeof tokens.colors;
}

const IconStyled = styled.button<IconButtonProps>`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .loading {
    animation: rotation 4s infinite linear;
  }
  /* Static styles */
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  &:disabled {
    opacity: 40%;
  }
  /* Inherit from design tokens */
  transition: ${tokens.animations.default.value};
  color: ${tokens.colors.neutral.white.value};
  background-color: ${(props) => tokens.colors[props.color][500].value};
  &:hover {
    background-color: ${(props) => tokens.colors[props.color][600].value};
  }
  &:active {
    background-color: ${(props) => tokens.colors[props.color][800].value};
  }
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, color = 'primary', ...rest }, ref) => {
    return (
      <IconStyled
        {...rest}
        ref={ref}
        color={color}
        disabled={disabled || loading}
      >
        {loading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="loading"
            style={{ width: '24px', height: '24px' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        ) : (
          rest.children
        )}
      </IconStyled>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
