import React, { ReactNode, HTMLAttributes } from 'react';

interface GradientWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  wrapperClassName?: string;
  gradient?: string;  // add gradient prop
}

const GradientWrapper: React.FC<GradientWrapperProps> = ({
  children,
  className = '',
  wrapperClassName = '',
  gradient = 'linear-gradient(180deg, #6a26e0ff 0%, rgba(44, 87, 144, 0.98) 0.01%, rgba(247, 40, 202, 0.2) 100%)',
  ...props
}) => (
  <div {...props} className={`relative ${className}`}>
    <div
      className={`absolute m-auto blur-[160px] ${wrapperClassName}`}
      style={{ background: gradient }}
    />
    <div className="relative">
      {children}
    </div>
  </div>
);

export default GradientWrapper;
