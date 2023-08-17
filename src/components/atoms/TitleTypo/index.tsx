import { type ReactNode } from 'react';

import './styles.scss';

interface TitleTypoProps {
  fontStyles?: {
    size: 'regular' | 'large';
    color: 'white' | 'black' | 'dark-blue';
  };
  styleClass?: string;
  children: ReactNode;
}

export const TitleTypo = ({
  fontStyles = {
    size: 'regular',
    color: 'white',
  },
  styleClass,
  children,
}: TitleTypoProps) => {
  return (
    <h1
      className={`title title--${fontStyles.size} title--${fontStyles.color} ${
        styleClass ?? ''
      }`}
    >
      {children}
    </h1>
  );
};
