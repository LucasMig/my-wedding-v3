import Typography from '@/components/atoms/Typography';
import { formInputs } from '@/components/organisms/AttendanceForm/data';
import { useFormik } from 'formik';
// import { useState } from 'react';
import * as yup from 'yup';
import './styles.scss';
import CustomInput from '@/components/molecules/CustomInput';
import Button from '@/components/atoms/Button';

interface AttendanceFormFields {
  name: string;
  email: string;
  phone: string;
  hasPet: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  hasPet: yup.boolean(),
});

const AttendanceForm = () => {
  // const [isFetching, setIsFetching] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (values: AttendanceFormFields) => {
    console.log(values);
  };

  const formik = useFormik<AttendanceFormFields>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      hasPet: false,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    void formik.setFieldValue(name, value);
  };

  return (
    <div className="rsvp">
      <Typography
        fontStyles={{
          size: 'large',
          weight: 'bold',
        }}
        styleClass="rsvp__title"
      >
        Confirme sua presença
      </Typography>
      <form className="rsvp__form" onSubmit={formik.handleSubmit}>
        {formInputs.map((input) => {
          const { id, name, type, placeholder } = input;
          return (
            <CustomInput
              key={id}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={handleInputChange}
              value={
                formik.values[name as keyof AttendanceFormFields] as string
              }
              touched={
                formik.touched[name as keyof AttendanceFormFields] as boolean
              }
              error={
                formik.errors[name as keyof AttendanceFormFields] as string
              }
            />
          );
        })}
        <label htmlFor="hasPet" className="rsvp__checkbox">
          Levará pet?
          <input
            id="hasPet"
            name="hasPet"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.hasPet}
            className="rsvp__checkbox--input-default"
          />
          <span className="rsvp__checkbox--input-custom"></span>
        </label>
        <Button styleClass="rsvp__form-submit" type="submit">
          Confirmar
        </Button>
      </form>
    </div>
  );
};

export default AttendanceForm;
