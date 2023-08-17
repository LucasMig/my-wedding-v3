import { SubtitleTypo } from '@/components/atoms/SubtitleTypo';
import './styles.scss';
import Typography from '@/components/atoms/Typography';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__content">
        <SubtitleTypo styleClass="intro__title">Pri e Lucas</SubtitleTypo>
        <Typography styleClass="intro__text">
          Essa é uma introdução rápida sobre nós, que vamos nos casar em
          dezembro desse ano. Esse texto ainda será alterado e a cor de fundo
          também!
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
