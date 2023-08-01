import Button from '@/components/atoms/Button';
import { Link } from 'react-router-dom';
import './styles.scss';
import { SubtitleTypo } from '@/components/atoms/SubtitleTypo';
import Typography from '@/components/atoms/Typography';

interface ErrorPageProps {
  title: string;
  message: string;
  btnVisible?: boolean;
}

const ErrorPage = ({ title, message, btnVisible = true }: ErrorPageProps) => {
  return (
    <div className="error-page">
      <img
        src="/images/logo-round.webp"
        alt="logo"
        className="error-page__logo"
      />
      <SubtitleTypo styleClass="error-page__title">{title}</SubtitleTypo>
      <Typography styleClass="error-page__message">{message}</Typography>
      {btnVisible && (
        <Link to="/">
          <Button>Voltar para a home</Button>
        </Link>
      )}
    </div>
  );
};

export default ErrorPage;
