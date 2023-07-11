import { type ReactNode } from 'react';
import './styles.scss';
import Typography from '@/components/atoms/Typography';

interface TimeCardProps {
  label: string;
  styleClass: string;
  children: ReactNode;
}

const TimeCard = ({ label, styleClass, children }: TimeCardProps) => {
  return (
    <div className="timecard__container">
      <Typography
        fontStyles={{ size: 'xlarge', weight: 'bold' }}
        styleClass={`timecard ${styleClass}`}
      >
        {children}
      </Typography>
      <Typography
        fontStyles={{ size: 'medium', weight: 'regular' }}
        styleClass="timecard__label"
      >
        {label}
      </Typography>
    </div>
  );
};

export default TimeCard;
