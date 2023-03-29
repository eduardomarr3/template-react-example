import React, { FC } from 'react';
import { ButtonSkeletonBase } from './styles';

const ButtonSkeleton: FC = ({ ...rest }) => {
  return <ButtonSkeletonBase {...rest} />;
};

export default ButtonSkeleton;
