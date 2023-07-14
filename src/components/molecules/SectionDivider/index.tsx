import React from 'react';
import './styles.scss';

interface SectionDividerProps {
  styleClass?: string;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  children?: React.ReactNode;
}

const SectionDivider = ({
  styleClass,
  variant,
  children,
}: SectionDividerProps) => {
  const imgPath = `/images/branch-${variant ?? 7}.webp`;

  return (
    <div className={`section-divider ${styleClass ?? ''}`}>
      <img src={imgPath} alt="divider" className="section-divider__img left" />
      {children}
      <img src={imgPath} alt="divider" className="section-divider__img right" />
    </div>
  );
};

export default SectionDivider;
