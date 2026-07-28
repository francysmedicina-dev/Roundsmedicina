import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase";
  
  const variants = {
    primary: "bg-blue-50 text-rounds-600 border border-blue-200/80",
    secondary: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "bg-transparent text-slate-600 border border-slate-200"
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
