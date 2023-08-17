import { type ReactNode } from 'react';
import './styles.scss';
import Typography from '@/components/atoms/Typography';

interface TimeCardProps {
  label: string;
  styleClass: string;
  color: 'white' | 'black' | 'dark-blue';
  children: ReactNode;
}

const TimeCard = ({ label, styleClass, color, children }: TimeCardProps) => {
  return (
    <div className={`timecard__container ${color ?? ''}`}>
      <Typography
        fontStyles={{ size: 'xlarge', weight: 'bold' }}
        styleClass={`timecard ${styleClass} ${color ?? ''}`}
      >
        {children}
      </Typography>
      <Typography
        fontStyles={{ size: 'medium', weight: 'regular' }}
        styleClass={`timecard__label ${color ?? ''}`}
      >
        {label}
      </Typography>
    </div>
  );
};

export default TimeCard;
