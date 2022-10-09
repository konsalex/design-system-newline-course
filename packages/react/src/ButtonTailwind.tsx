import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className={[
          'newline-bg-primary-500 hover:newline-bg-primary-700',
          'active:newline-bg-primary-800 newline-text-neutral-white',
          'newline-py-8 newline-px-[20px]',
          'newline-rounded-large',
        ].join(' ')}
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  }
);

Button.displayName = 'ButtonTailwind';

export default Button;
