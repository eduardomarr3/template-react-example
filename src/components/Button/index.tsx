import React, { FC, PropsWithChildren, useState } from 'react';
import { ButtonProps } from '@platformbuilders/fluid-react';
import { If } from '~/components';
import { showAlert } from '~/utils';
import {
  Button,
  ButtonCenterTitle,
  ButtonContent,
  ButtonTitle,
  CenterIcon,
  LeftIcon,
  RightIcon,
} from './styles';

type Props = {
  accessibility: string;
  disabled?: boolean;
  noStyle?: boolean;
  secondary?: boolean;
  secondaryHighEmphasis?: boolean;
  iconName?: string;
  leftIconName?: string;
  rightIconName?: string;
  showModalOnError?: boolean;
  onPress(): Promise<void> | void;
  noStyleAlignLeft?: boolean;
  noStyleAlignRight?: boolean;
  loading?: boolean;
  customError?(): void;
} & ButtonProps;

const Touchable: FC<PropsWithChildren<Props>> = ({
  accessibility,
  children,
  secondary = false,
  secondaryHighEmphasis = false,
  iconName = '',
  leftIconName = '',
  rightIconName = '',
  disabled,
  onPress,
  loading,
  customError,
  ...rest
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  // const { name: SCREEN } = useRoute();

  const hasSideIcons = !!leftIconName || !!rightIconName;
  const hasCenterIcon = !!iconName;

  const handleOnPress = (): void => {
    setTimeout(async (): Promise<void> => {
      try {
        setInternalLoading(true);
        await onPress();
      } catch ({ message }) {
        if (customError) {
          return customError();
        }
        showAlert({
          position: 'top-right',
          message,
        });
      } finally {
        setInternalLoading(false);
        // Analytics.logButtonClick({
        //   SCREEN,
        //   ACCESSIBILITY: accessibility,
        //   CLICK_BUTTON:
        //     typeof children !== 'string' ? accessibility : children!.toString(),
        // });
      }
    }, 100);
  };

  return (
    <Button
      {...rest}
      accessibility={accessibility}
      onPress={handleOnPress}
      loading={loading || internalLoading}
      secondary={secondary}
      secondaryHighEmphasis={!!secondaryHighEmphasis}
      contrast={secondary}
      disabled={!!disabled}
    >
      <If condition={hasSideIcons && !hasCenterIcon}>
        <ButtonContent>
          <LeftIcon
            accessibility="ícone esquerdo botão"
            name={leftIconName}
            secondary={secondary}
            secondaryHighEmphasis={!!secondaryHighEmphasis}
          />
          <ButtonTitle
            secondary={secondary}
            secondaryHighEmphasis={!!secondaryHighEmphasis}
          >
            {children}
          </ButtonTitle>
          <RightIcon
            accessibility="ícone direito botão"
            name={rightIconName}
            secondary={secondary}
            secondaryHighEmphasis={!!secondaryHighEmphasis}
          />
        </ButtonContent>
      </If>
      <If condition={!hasSideIcons && hasCenterIcon}>
        <ButtonContent>
          <CenterIcon
            accessibility="ícone do botão"
            name={iconName}
            secondary={secondary}
            secondaryHighEmphasis={!!secondaryHighEmphasis}
          />
          <ButtonCenterTitle
            secondary={secondary}
            secondaryHighEmphasis={!!secondaryHighEmphasis}
          >
            {children}
          </ButtonCenterTitle>
        </ButtonContent>
      </If>
      <If condition={!hasSideIcons && !hasCenterIcon}>{children}</If>
    </Button>
  );
};

export default Touchable;
