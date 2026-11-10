import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled,
  ...props
}) => {
  const baseStyles = 'group inline-flex items-center justify-center font-medium font-sans transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent shadow-sm hover:shadow-glow',
    secondary: 'border border-accent text-accent hover:bg-accent/5 focus-visible:ring-accent',
    ghost: 'text-ink hover:bg-black/5 hover:text-ink focus-visible:ring-ink/20',
    dark: 'bg-ink text-white hover:bg-black/85 focus-visible:ring-ink shadow-sm hover:shadow-md hover:-translate-y-0.5',
    white: 'bg-white text-ink hover:bg-white/90 focus-visible:ring-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 h-9 rounded-md gap-1.5',
    md: 'text-sm px-5 py-3 h-11 rounded-md gap-2',
    lg: 'text-base px-7 py-3.5 h-13 rounded-lg gap-2.5',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </button>
  );
};

