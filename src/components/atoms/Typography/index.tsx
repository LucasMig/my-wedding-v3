interface TypographyStyle {
  fontSize?: 'sm' | 'rg' | 'md' | 'lg' | 'xl';
  fontWeight?: 'bold' | 'semiBold' | 'regular' | 'light';
  color?: 'black-900' | 'white-900' | 'red-100' | 'red-200' | 'red-300';
  styleClass?: string;
  children: React.ReactNode;
}

const Typography = ({
  fontSize = 'md',
  fontWeight = 'regular',
  color = 'black-900',
  children,
  styleClass,
}: TypographyStyle) => {
  const weight = {
    light: 'trenda--fw-light',
    regular: 'trenda--fw-regular',
    semiBold: 'trenda--fw-semi-bold',
    bold: 'trenda--fw-bold',
  };

  return (
    <p
      className={`ty fs--${fontSize} ${weight[fontWeight]} ${color} ${
        styleClass ?? ''
      }`}
    >
      {children}
    </p>
  );
};

export default Typography;
