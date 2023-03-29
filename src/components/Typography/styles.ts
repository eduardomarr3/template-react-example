import styled from 'styled-components';
import { Typography } from '@platformbuilders/fluid-react';
import { getTheme } from '~/modules';

const textMain = getTheme('text.main');

export const Text = styled(Typography)`
  color: ${textMain};
`;
