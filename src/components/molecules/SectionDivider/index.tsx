import React from 'react';
import './styles.scss';

interface SectionDividerProps {
  styleClass?: string;
  mirror?: boolean;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  children?: React.ReactNode;
}

const SectionDivider = ({
  styleClass,
  mirror,
  variant,
  children,
}: SectionDividerProps) => {
  const imgPath = `/images/branches/branch-${variant ?? 7}.webp`;

  return (
    <div className={`section-divider ${styleClass ?? ''}`}>
      <img src={imgPath} alt="divider" className="section-divider__img left" />
      {children}
      <img
        src={imgPath}
        alt="divider"
        className={`section-divider__img right ${mirror ? 'mirror' : ''}`}
      />
    </div>
  );
};

export default SectionDivider;
