import { type ReactNode } from 'react';
import './styles.scss';
import Typography from '@/components/atoms/Typography';

interface TimeCardProps {
  styleClass: string;
  children: ReactNode;
}

const TimeCard = ({ styleClass, children }: TimeCardProps) => {
  return (
    <Typography styleClass={`timecard ${styleClass}`}>{children}</Typography>
  );
};

export default TimeCard;
