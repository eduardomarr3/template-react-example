import React, { FC } from 'react';
import { TypographyType } from '@platformbuilders/fluid-react';
import { Text } from './styles';

const TextComponent: FC<TypographyType> = (props) => <Text {...props} />;

export default TextComponent;
