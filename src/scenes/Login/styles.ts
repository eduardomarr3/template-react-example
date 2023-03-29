import styled from 'styled-components';
import {
  Button,
  TextInput as DefaultTextInput,
  Typography,
} from '~/components';
import { getTheme } from '~/modules';
import { breakpoints } from '~/utils';

const spacingMd = getTheme('spacing.md');
const spacingMin = getTheme('spacing.min');

export const BoxWrappers = styled.div`
  margin: ${spacingMin}px 0;

  @media ${breakpoints.inMobileAndTablet} {
    /*
    * responsive styles
    */
  }
`;

export const Form = styled.form``;

export const SubmitButton = styled(Button)`
  margin: ${spacingMd}px auto;
  align-self: center;
`;

export const Heading = styled(Typography).attrs({ variant: 'max' })`
  font-weight: 700;
`;

export const Paragraph = styled(Typography)`
  margin-top: ${spacingMd}px;
  margin-bottom: ${spacingMd}px;
  letter-spacing: 1px;
`;

export const TextInput = styled(DefaultTextInput)`
  margin-bottom: 50px;
`;
