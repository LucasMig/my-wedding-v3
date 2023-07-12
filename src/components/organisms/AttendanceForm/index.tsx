import Typography from '@/components/atoms/Typography';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import './styles.scss';
import CustomInput from '@/components/molecules/CustomInput';

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
        <CustomInput
          id="name"
          name="name"
          type="text"
          placeholder="Nome completo"
          onChange={handleInputChange}
          value={formik.values.name}
          touched={formik.touched.name}
          error={formik.errors.name}
        />
        <CustomInput
          id="phone"
          name="phone"
          type="text"
          placeholder="Telefone"
          onChange={handleInputChange}
          value={formik.values.phone}
          touched={formik.touched.phone}
          error={formik.errors.phone}
        />
        <CustomInput
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={handleInputChange}
          value={formik.values.email}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
      </form>
    </div>
  );
};

export default AttendanceForm;
