import Typography from '@/components/atoms/Typography';
import './styles.scss';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  console.log(icon);
  return (
    <div className="info-card">
      <span className="info-card__icon">{icon}</span>
      <Typography styleClass="info-card__title">{title}</Typography>
      {description.map((item, index) => (
        <Typography styleClass="info-card__content" key={index}>
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default InfoCard;
