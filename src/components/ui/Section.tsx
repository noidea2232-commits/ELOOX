import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'white' | 'surface' | 'dark';
  spacing?: 'default' | 'sm' | 'lg' | 'none';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  variant = 'white',
  spacing = 'default',
  id,
  ...props
}) => {
  const variants = {
    white: 'bg-bg text-ink',
    surface: 'bg-surface text-ink',
    dark: 'bg-bold-bg text-bold-text',
  };

  const spacings = {
    none: 'py-0',
    sm: 'py-12 sm:py-16 md:py-20',
    default: 'py-20 sm:py-24 md:py-32',
    lg: 'py-28 sm:py-36 md:py-44',
  };

  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', variants[variant], spacings[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
};

