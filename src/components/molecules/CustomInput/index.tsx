import './styles.scss';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  error: string | undefined;
  touched: boolean | undefined;
  styleClass?: string;
}

const CustomInput = ({
  type,
  error,
  touched,
  styleClass,
  ...restProps
}: CustomInputProps) => {
  return (
    <div className={`form-field ${styleClass ?? ''}`}>
      <input {...restProps} className="form-input" type={type} />
      {error && touched && <span className="form-error">{error}</span>}
    </div>
  );
};

export default CustomInput;
