import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'dark' | 'outline' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-surface text-ink-secondary border border-border',
    accent: 'bg-accent/10 text-accent border border-accent/20 font-medium',
    dark: 'bg-bold-surface text-bold-text border border-bold-border',
    outline: 'border border-border text-ink-secondary bg-transparent',
    success: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-tight rounded-md uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

