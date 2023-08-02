import Typography from '@/components/atoms/Typography';
import './styles.scss';
import parse from 'html-react-parser';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="info-card">
      <span className="info-card__icon">{icon}</span>
      <Typography styleClass="info-card__title">{title}</Typography>
      {description.map((item, index) => (
        <Typography styleClass="info-card__content" key={index}>
          {parse(item)}
        </Typography>
      ))}
    </div>
  );
};

export default InfoCard;
