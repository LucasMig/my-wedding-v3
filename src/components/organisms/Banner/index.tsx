import './styles.scss';

interface BannerProps {
  imgPath: `/images/${string}`;
  children?: React.ReactNode;
}

const Banner = ({ imgPath, children }: BannerProps) => {
  return (
    <section className="banner">
      <img
        src={imgPath}
        alt={imgPath.split('/images/')[1]}
        className="banner__img"
      />
      {children}
    </section>
  );
};

export default Banner;
