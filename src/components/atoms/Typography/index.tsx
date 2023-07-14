import './styles.scss';

interface TypographyStyle {
  fontStyles?: {
    size: 'small' | 'regular' | 'medium' | 'large' | 'xlarge';
    weight: 'light' | 'regular' | 'semiBold' | 'bold';
  };
  styleClass?: string;
  children: React.ReactNode;
}

const Typography = ({
  fontStyles = {
    size: 'regular',
    weight: 'regular',
  },
  styleClass,
  children,
}: TypographyStyle) => {
  const { size, weight } = fontStyles;
  return (
    <p
      className={`typography typo--${'size-' + size} typo--${
        'weight-' + weight
      } ${styleClass ?? ''}`}
    >
      {children}
    </p>
  );
};

export default Typography;
