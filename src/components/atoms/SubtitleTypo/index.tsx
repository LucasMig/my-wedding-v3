import { type ReactNode } from 'react';

import './styles.scss';

interface SubtitleTypoProps {
  fontStyles?: {
    size: 'regular' | 'large';
  };
  styleClass?: string;
  children: ReactNode;
}

export const SubtitleTypo = ({
  fontStyles = {
    size: 'regular',
  },
  styleClass,
  children,
}: SubtitleTypoProps) => {
  const { size } = fontStyles;

  return (
    <h2 className={`subtitle subtitle--${size} ${styleClass ?? ''}`}>
      {children}
    </h2>
  );
};
