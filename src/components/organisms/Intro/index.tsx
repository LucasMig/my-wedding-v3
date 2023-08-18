import { SubtitleTypo } from '@/components/atoms/SubtitleTypo';
import './styles.scss';
import Typography from '@/components/atoms/Typography';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__content">
        <SubtitleTypo styleClass="intro__title">Sejam bem-vindos!</SubtitleTypo>
        <Typography styleClass="intro__text">
          Até o grande dia chegar, queremos compartilhar os detalhes importantes
          para que possam aproveitar o momento conosco.
          <br />
          <br />
          Estamos ansiosos para celebrar esse dia com vocês!
        </Typography>
      </div>
      <div className="intro__image-container">
        <img
          src="/images/park/park-1.webp"
          alt="pri-e-lucas"
          className="intro__image"
        />
      </div>
    </section>
  );
};

export default Intro;
