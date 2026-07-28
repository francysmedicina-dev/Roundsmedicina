import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'lg',
  href,
  showArrow = true,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rounds-600 focus:ring-offset-2";

  const sizeStyles = {
    md: "px-5 py-2.5 text-xs tracking-wide",
    lg: "px-6 py-3.5 text-sm tracking-wide",
  };

  const variantStyles = {
    primary: "bg-[#0055FF] hover:bg-blue-700 text-white shadow-sm border border-blue-600/30",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200",
    outline: "bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-300"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer">
        <span className="flex items-center gap-2">
          {children}
          {showArrow && <ArrowRight className="w-4 h-4 opacity-90" />}
        </span>
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      <span className="flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 opacity-90" />}
      </span>
    </button>
  );
};
