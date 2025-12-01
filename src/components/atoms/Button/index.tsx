import type { ReactNode, ButtonHTMLAttributes, ComponentType, SVGProps } from 'react';
import './style.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconPosition?: IconPosition;
  fullWidth?: boolean;
  loading?: boolean;
};

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const classNames = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    loading && 'button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || loading;

  const IconComponent = icon;

  return (
    <button
      className={classNames}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <div className="button__spinner" aria-hidden="true" />
      )}
      {!loading && IconComponent && iconPosition === 'left' && (
        <IconComponent className="button__icon button__icon--left" aria-hidden="true" />
      )}
      <div className="button__content">{children}</div>
      {!loading && IconComponent && iconPosition === 'right' && (
        <IconComponent className="button__icon button__icon--right" aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
