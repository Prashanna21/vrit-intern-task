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

export type ToolTipProps = {
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
};

export type TaskTwoContainerProps = {
  imgSrc : string;
  className? : string;
  title: string;
  secondTitle : string;
  content : string;
  imagePos? : 'right' | 'left';
  bgColor? : string;
  inside? : any;
  customImgPostion? : string,
  customTextWidth? : string
}

export type TaskTwoSliderContainerProps = {
  className? : string
  children : React.ReactNode;
  bgImg? : string;
  inside?: any,
  onPrev: () => void;
  onNext: () => void;
}