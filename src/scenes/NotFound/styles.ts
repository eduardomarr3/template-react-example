import styled from 'styled-components';
import { Typography } from '~/components';
import { getTheme } from '~/modules';

// colors
const primaryColor = getTheme('brand.primary.main');
const secondaryColor = getTheme('brand.secondary.main');

// spacing
const spacingMd = getTheme('spacing.md');

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled(Typography).attrs({ variant: 'max' })`
  font-weight: bolder;
  color: ${primaryColor};
`;

export const Subtitle = styled(Typography).attrs({ variant: 'md' })`
  font-weight: 400;
  color: ${secondaryColor};
  padding-top: ${spacingMd};
`;
