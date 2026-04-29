'use client';

import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  secondary:
    'bg-zinc-800 text-white hover:bg-zinc-900 focus-visible:ring-zinc-600',
  outline:
    'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-500',
};

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClassName = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClassName}
    >
      {children}
    </button>
  );
}
