import styled from 'styled-components';
import { Button as Btn } from '~/components';
import { getTheme } from '~/modules';

const spacingLg = getTheme('spacing.lg');

export const WrapperComponent = styled.div`
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

export const ComponentsGroup = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin: ${spacingLg} 0;
`;

export const Button = styled(Btn)``;
