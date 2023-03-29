import {
  LoadDotsAnimation,
  LoadingCircleAnimation,
  LoadingProgressAnimation,
} from '~/assets';
import { Animations } from '~/modules';

export default {
  circularLoading: LoadingCircleAnimation,
  contrastCircularLoading: LoadingCircleAnimation,
  buttonLoading: LoadDotsAnimation,
  contrastButtonLoading: LoadDotsAnimation,
  linearLoading: LoadingProgressAnimation,
  contrastLinearLoading: LoadingProgressAnimation,
} as Animations;
