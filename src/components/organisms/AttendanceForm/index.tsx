/* eslint-disable no-template-curly-in-string */
import Typography from '@/components/atoms/Typography';
import { formInputs } from '@/components/organisms/AttendanceForm/data';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import './styles.scss';
import CustomInput from '@/components/molecules/CustomInput';
import Button from '@/components/atoms/Button';
import emailjs from '@emailjs/browser';
import FormSuccessMessage from '@/components/molecules/FormSuccessMessage';

interface AttendanceFormFields {
  name: string;
  email: string;
  phone: string;
  hasPet: boolean;
}

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    length: 'O telefone deve ter 11 dígitos (DDD + número)',
  },
});

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required().length(11),
  hasPet: yup.boolean(),
});

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const emailJsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const AttendanceForm = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (values: AttendanceFormFields) => {
    setIsFetching(true);

    try {
      const formResponses = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        hasPet: values.hasPet ? 'Sim' : 'Não',
      };

      await emailjs
        .send(serviceID, templateID, formResponses, emailJsKey)
        .then(() => {
          setIsFetching(false);
          setFormSubmitted(true);
          formik.resetForm();
          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        });
    } catch (error) {
      console.error(error);
      setIsFetching(false);
      setFormSubmitted(false);
    }
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
          const { id, name } = input;
          return (
            <CustomInput
              key={id}
              {...input}
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
          Quero levar meu pet!
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
        <Button styleClass={isFetching ? 'disabled' : ''} type="submit">
          Confirmar
        </Button>
      </form>
      <FormSuccessMessage isVisible={formSubmitted} />
    </div>
  );
};

export default AttendanceForm;
