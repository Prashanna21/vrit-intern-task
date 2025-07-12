import type { TargetAndTransition, Transition } from 'framer-motion';

export type TImageProps = {
  src: string;
  className?: string;
  animate?: TargetAndTransition;
  transition?: Transition;
  onAnimationComplete?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  hoverEffect?: boolean;
};

export type TToolTipProps = {
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
};

export type TTaskTwoContainerProps = {
  imgSrc : string;
  className? : string;
  title: string;
  secondTitle : string;
  content : string;
  imagePos? : string;
  bgColor? : string;
  inside? : any;
  customImgPostion? : string,
  customTextWidth? : string
}

export type TTaskTwoSliderContainerProps = {
  className? : string
  children : React.ReactNode;
  bgImg? : string;
  inside?: any,
  onPrev: () => void;
  onNext: () => void;
}

export type TTContainerOpenProps = {
  title : string,
  secondtitle: string,
  content: string,
  open: boolean,
}

export type TTViewAllAnimatedProps = {
  text: string,
  textColor: string,
}