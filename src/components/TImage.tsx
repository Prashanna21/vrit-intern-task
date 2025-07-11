import React from 'react';
import { motion } from 'framer-motion';
import type { TImageProps } from '../types/types';

const TImage = ({
  src,
  className,
  animate,
  transition,
  onAnimationComplete,
  onMouseEnter,
  onMouseLeave,
  hoverEffect = false,
}: TImageProps) => {
  return (
    <motion.img
      src={src}
      alt="image"
      className={`h-[97px] w-[96px] rounded-4xl ${className}`}
      animate={animate}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={
        hoverEffect
          ? {
              boxShadow: ['0 0 8px #97D3C0', '0 0 16px #97D3C0', '0 0 24px #97D3C0'],
              backdropFilter: ['blur(5px)', 'blur(10px)', 'blur(15px)'],
            }
          : undefined
      }
    />
  );
};

export default TImage;