import React, { FC } from 'react';
import { Formik } from 'formik';
import { observer, sanitizeValues, useNavigate } from '~/modules';
import { Routes } from '~/routes';
import { showAlert, useStores } from '~/utils';
import Login from './Login';
import validationSchema from './validation';

const initialValues: AuthUser = {
  cpf: '',
  email: '',
  password: '',
  keepSession: true,
};

const LoginContainer: FC = () => {
  const { user } = useStores();
  const navigate = useNavigate();

  const handleFormSubmit = async (
    formValues: AuthUser,
    { setSubmitting }: { setSubmitting(value: boolean): void },
  ): Promise<void> => {
    try {
      setSubmitting(true);
      const cleanFormValues = sanitizeValues<AuthUser>(formValues);
      await user.login(cleanFormValues);
    } catch ({ message }) {
      showAlert({ message });
    } finally {
      setSubmitting(false);
      navigate(Routes.HOME);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
    >
      <Login />
    </Formik>
  );
};

export default observer(LoginContainer);
