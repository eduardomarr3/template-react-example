import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { Checkbox, SceneWrapper } from '~/components';
import {
  BoxWrappers,
  Form,
  Heading,
  Paragraph,
  SubmitButton,
  TextInput,
} from './styles';

const Login: React.FC = () => {
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  }: FormikProps<AuthUser> = useFormikContext();

  return (
    <SceneWrapper>
      <Heading>Olá</Heading>
      <Paragraph>Faça login</Paragraph>
      <Form>
        <TextInput
          autoFocus
          fullWidth
          label="CPF"
          id="cpf"
          name="cpf"
          type="tel"
          onBlur={handleBlur}
          error={touched?.cpf && errors?.cpf}
          value={values.cpf}
          onChange={handleChange}
        />
        <TextInput
          fullWidth
          label="E-mail"
          id="email"
          name="email"
          type="email"
          onBlur={handleBlur}
          error={touched?.email && errors?.email}
          value={values.email}
          onChange={handleChange}
        />
        <TextInput
          fullWidth
          label="Senha"
          id="password"
          name="password"
          type="password"
          onBlur={handleBlur}
          error={touched?.password && errors?.password}
          value={values.password}
          onChange={handleChange}
        />
        <BoxWrappers>
          <Checkbox
            name="keepSession"
            checked={values.keepSession}
            error={touched?.keepSession && errors?.keepSession}
            onChange={() => setFieldValue('keepSession', !values.keepSession)}
            label="Manter-me logado"
          />
        </BoxWrappers>
        <SubmitButton
          accessibility="botão de login"
          type="submit"
          onPress={handleSubmit}
          loading={isSubmitting}
        >
          Fazer Login
        </SubmitButton>
      </Form>
    </SceneWrapper>
  );
};

export default Login;
