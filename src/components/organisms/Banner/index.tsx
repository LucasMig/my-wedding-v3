import './styles.scss';

interface BannerProps {
  imgPath: `/images/${string}`;
  text?: string;
}

const Banner = ({ imgPath }: BannerProps) => {
  return (
    <section className="banner">
      <img
        src={imgPath}
        alt={imgPath.split('/images/')[1]}
        className="banner__img"
      />
    </section>
  );
};

export default Banner;
