import type { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import './style.css';

export type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownVariant = 'default' | 'filled';

export type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  size?: DropdownSize;
  variant?: DropdownVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  id?: string;
};

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  helperText,
  error = false,
  errorMessage,
  size = 'md',
  variant = 'default',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  id,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const wrapperClassNames = [
    'dropdown',
    fullWidth && 'dropdown--full-width',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const triggerClassNames = [
    'dropdown__trigger',
    `dropdown__trigger--${variant}`,
    `dropdown__trigger--${size}`,
    error && 'dropdown__trigger--error',
    disabled && 'dropdown__trigger--disabled',
    isOpen && 'dropdown__trigger--open',
    icon && 'dropdown__trigger--with-icon',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames} ref={dropdownRef}>
      {label && (
        <label htmlFor={dropdownId} className="dropdown__label">
          {label}
        </label>
      )}
      <button
        id={dropdownId}
        type="button"
        className={triggerClassNames}
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-invalid={error}
        aria-describedby={
          error && errorMessage
            ? `${dropdownId}-error`
            : helperText
            ? `${dropdownId}-helper`
            : undefined
        }
      >
        {icon && <span className="dropdown__icon">{icon}</span>}
        <span className="dropdown__text">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`dropdown__chevron ${isOpen ? 'dropdown__chevron--open' : ''}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul
          className={`dropdown__menu dropdown__menu--${size}`}
          role="listbox"
          aria-labelledby={dropdownId}
        >
          {options.length === 0 ? (
            <li className="dropdown__option dropdown__option--empty">No options available</li>
          ) : (
            options.map((option) => {
              const optionClassNames = [
                'dropdown__option',
                option.disabled && 'dropdown__option--disabled',
                option.value === value && 'dropdown__option--selected',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <li
                  key={option.value}
                  className={optionClassNames}
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                >
                  {option.label}
                </li>
              );
            })
          )}
        </ul>
      )}
      {error && errorMessage && (
        <span id={`${dropdownId}-error`} className="dropdown__message dropdown__message--error">
          {errorMessage}
        </span>
      )}
      {!error && helperText && (
        <span id={`${dropdownId}-helper`} className="dropdown__message dropdown__message--helper">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
