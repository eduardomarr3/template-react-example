import styled from 'styled-components';
import { Button, Typography } from '~/components';
import { getTheme } from '~/modules';
import { breakpoints } from '~/utils';

const spacingLg = getTheme('spacing.lg');

export const Heading = styled(Typography).attrs({
  variant: 'max',
})`
  font-weight: 700;
`;

export const Paragraph = styled(Typography)`
  margin-block: ${spacingLg}px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const ActionButton = styled(Button)`
  width: 100%;
  margin-top: ${spacingLg}px;

  @media ${breakpoints.inMobile} {
    width: 90%;
  }
`;
