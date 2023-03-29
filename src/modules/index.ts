import * as Toastify from 'react-toastify';
import * as FormValidator from 'yup';
import * as CNPJ from '@fnando/cnpj';
import * as CPF from '@fnando/cpf';

export { Toastify, FormValidator, CPF, CNPJ };
export { Formik as FormBehavior } from 'formik';
export { default as DateManager } from 'moment';
export { default as Numeral } from 'numeral';
export {
  default as styled,
  css,
  ThemeContext,
  ThemeProvider,
} from 'styled-components';
export { default as TextInputMask } from 'react-input-mask';
export { default as Animation } from 'react-lottie';
export { observer, inject, MobXProviderContext, Provider } from 'mobx-react';
export { configurePersistable, makePersistable } from 'mobx-persist-store';
export { makeAutoObservable, runInAction } from 'mobx';
export {
  themeFormatter,
  getTheme,
  ifStyle,
  switchStyle,
  pxToRem,
} from '@platformbuilders/theme-toolkit';
export { isEmpty } from 'lodash';
export { useNavigate } from 'react-router';
export { default as Helmet } from 'react-helmet';
export type {
  FluidTheme,
  Animations,
  Colors,
  TypographyType,
} from '@platformbuilders/theme-toolkit';
export {
  Avatar,
  Button,
  Checkbox,
  FormError,
  Icon,
  LoadingIndicator,
  Paper,
  Select,
  Touchable,
} from '@platformbuilders/fluid-react';
export {
  currencyParser,
  parseToThousands,
  removeWhiteSpaces,
  toOnlyNumbers,
  sanitizeValues,
  isSecureLink,
} from '@platformbuilders/helpers';

export {
  isValidPassword,
  isValidPin,
  isValidCpf,
  isValidCnpj,
  isValidDocument,
  isValidFullName,
  isValidEmail,
  isValidCep,
  isValidCurrency,
  isValidDDD,
} from '@platformbuilders/validations';
