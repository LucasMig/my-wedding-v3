import Typography from '@/components/atoms/Typography';
import './styles.scss';
import { CURRENT_YEAR } from '@/shared/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/logo-round.webp" alt="logo" className="footer__logo" />
      <div className="footer__content">
        <Typography styleClass="footer__text">Feito com 💙</Typography>
        <Typography styleClass="footer__text">
          por{' '}
          <a
            href="https://www.linkedin.com/in/lucas-migliori/"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Migliori
          </a>
        </Typography>
        <Typography styleClass="footer__text">© {CURRENT_YEAR}</Typography>
      </div>
    </footer>
  );
};

export default Footer;
