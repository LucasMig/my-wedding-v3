import './styles.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleClass?: string;
  children: React.ReactNode;
}

const Button = ({ children, styleClass, ...restProps }: ButtonProps) => {
  return (
    <button className={`btn ${styleClass ?? ''}`} type="button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
