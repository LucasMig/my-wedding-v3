import Typography from '@/components/atoms/Typography';
import './styles.scss';

interface FormSuccessMessageProps {
  isVisible: boolean;
}

const FormSuccessMessage = ({ isVisible }: FormSuccessMessageProps) => {
  return (
    <div className={`form__success-message ${isVisible ? 'visible' : ''}`}>
      <Typography styleClass="form__text">
        Agradecemos pelas informações. Que bom que estará conosco!
      </Typography>
    </div>
  );
};

export default FormSuccessMessage;
