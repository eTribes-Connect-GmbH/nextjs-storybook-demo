import type { InputHTMLAttributes, ComponentType, SVGProps } from 'react';
import './style.css';

export type TextFieldSize = 'sm' | 'md' | 'lg';
export type TextFieldVariant = 'default' | 'filled';

export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  fullWidth?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
};

const TextField = ({
  label,
  helperText,
  error = false,
  errorMessage,
  size = 'md',
  variant = 'default',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  id,
  ...props
}: TextFieldProps) => {
  const inputId = id || `textfield-${Math.random().toString(36).substring(2, 11)}`;

  const wrapperClassNames = [
    'text-field',
    fullWidth && 'text-field--full-width',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputWrapperClassNames = [
    'text-field__input-wrapper',
    `text-field__input-wrapper--${variant}`,
    `text-field__input-wrapper--${size}`,
    error && 'text-field__input-wrapper--error',
    disabled && 'text-field__input-wrapper--disabled',
    icon && 'text-field__input-wrapper--with-icon',
    icon && `text-field__input-wrapper--icon-${iconPosition}`,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClassNames = [
    'text-field__input',
    `text-field__input--${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  const IconComponent = icon;

  return (
    <div className={wrapperClassNames}>
      {label && (
        <label htmlFor={inputId} className="text-field__label">
          {label}
        </label>
      )}
      <div className={inputWrapperClassNames}>
        {IconComponent && iconPosition === 'left' && (
          <IconComponent className="text-field__icon text-field__icon--left" aria-hidden="true" />
        )}
        <input
          id={inputId}
          className={inputClassNames}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={
            error && errorMessage
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          {...props}
        />
        {IconComponent && iconPosition === 'right' && (
          <IconComponent className="text-field__icon text-field__icon--right" aria-hidden="true" />
        )}
      </div>
      {error && errorMessage && (
        <span id={`${inputId}-error`} className="text-field__message text-field__message--error">
          {errorMessage}
        </span>
      )}
      {!error && helperText && (
        <span id={`${inputId}-helper`} className="text-field__message text-field__message--helper">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextField;
