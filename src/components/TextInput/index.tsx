import React from 'react';
import { TextInputType } from '@platformbuilders/fluid-react';
import { TextInputStyled } from './styles';

type Props = TextInputType;

const TextInput: React.FC<Props> = ({ multiline, ...rest }) => (
  <TextInputStyled multiline={multiline} {...rest} />
);

export default TextInput;
