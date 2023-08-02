import { type ReactNode } from 'react';

import './styles.scss';

interface TitleTypoProps {
  fontStyles?: {
    size: 'regular' | 'large';
  };
  styleClass?: string;
  children: ReactNode;
}

export const TitleTypo = ({
  fontStyles = {
    size: 'regular',
  },
  styleClass,
  children,
}: TitleTypoProps) => {
  return (
    <h1 className={`title title--${fontStyles.size} ${styleClass ?? ''}`}>
      {children}
    </h1>
  );
};
