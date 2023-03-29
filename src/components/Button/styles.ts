import styled, { css } from 'styled-components';
import {
  Button as ButtonComponent,
  Icon,
  getTheme,
  ifStyle,
  pxToRem,
} from '~/modules';
import Typography from '../Typography';

const primary = getTheme('brand.primary.main');
const primaryContrast = getTheme('brand.primary.contrast');
const secondaryMain = getTheme('brand.secondary.main');
const secondaryContrast = getTheme('brand.secondary.contrast');
const textLink = getTheme('text.link');

const smallSpacing = getTheme('spacing.sm');
const buttonRadius = getTheme('themeRadius.button');

const xxlSizing = getTheme('sizing.xxl');

const isSecondary = ifStyle('secondary');
const isHighEmphasis = ifStyle('secondaryHighEmphasis');
const isDisabled = ifStyle('disabled');

const primaryFont = getTheme('body.body');

type ButtonProps = {
  secondary?: boolean;
  disabled?: boolean;
  secondaryHighEmphasis?: boolean;
};

// ## shared with button skeleton
const buttonBase = css`
  height: ${xxlSizing}px;
  border-radius: ${buttonRadius}px;
`;

export const Button = styled(ButtonComponent).attrs((props: any) => ({
  textStyle: {
    color: `${isSecondary(
      isHighEmphasis(secondaryContrast(props), textLink(props))(props),
      primaryContrast(props),
    )(props)}`,
    fontFamily: primaryFont(props),
    fontWeight: '600',
    textTransform: 'uppercase',
  },
}))<ButtonProps>`
  border: ${isSecondary(isHighEmphasis(0, 1), 0)}px solid ${textLink};
  background-color: ${isSecondary(
    isHighEmphasis(secondaryMain, 'transparent'),
    primary,
  )};
  opacity: ${isDisabled(0.3, 1)};
  padding: 0;
  ${buttonBase};
`;

export const ButtonContent = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Typography).attrs({
  variant: 'xs',
})`
  color: ${(props: any) =>
    props.color || isHighEmphasis(secondaryContrast, textLink)};
  font-weight: 700;
`;

export const ButtonTitle = styled(Typography).attrs({
  variant: 'md',
})<ButtonProps>`
  color: ${isSecondary(
    isHighEmphasis(secondaryContrast, textLink),
    primaryContrast,
  )};
  text-align: left;
  width: 70%;
`;

export const ButtonCenterTitle = styled(ButtonTitle)`
  text-align: center;
  width: auto;
  margin-left: ${smallSpacing}px;
`;

export const CenterIcon = styled(Icon).attrs((props: any) => ({
  size: pxToRem(18),
  primaryColor: `${isSecondary(
    isHighEmphasis(secondaryContrast(props), textLink(props))(props),
    primaryContrast(props),
  )(props)}`,
}))<ButtonProps>`
  align-items: flex-end;
`;

export const LeftIcon = styled(CenterIcon)`
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const RightIcon = styled(CenterIcon)`
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const ButtonSkeletonBase = styled.div<ButtonProps>`
  width: 100%;
  ${buttonBase};
`;
