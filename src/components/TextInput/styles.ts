import styled from 'styled-components';
import { TextInput as TextInputComponent } from '@platformbuilders/fluid-react';
import { css, getTheme, ifStyle } from '~/modules';

const inputRadius = getTheme('themeRadius.input');
const isMultiLine = ifStyle('multiline');

const inputHeight = 48;

export const inputBaseStyling = css`
  border-radius: ${inputRadius}px;
  height: ${isMultiLine('auto', `${inputHeight}px`)};
  justify-content: center;
`;

export const TextInputStyled = styled(TextInputComponent).attrs({
  textInputStyle: {
    inputBaseStyling,
  },
})``;
