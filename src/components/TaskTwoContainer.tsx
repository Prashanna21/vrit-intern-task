import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { TaskTwoContainerProps } from '../types/types';
import TaskTwoSlidableContainer from '../components/TaskTwoSlidableContainer';

const TaskTwoContainer = ({
  imgSrc,
  className,
  title,
  secondTitle,
  content,
  imagePos = 'left',
  bgColor,
  inside,
  customImgPostion,
  customTextWidth,
}: TaskTwoContainerProps) => {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!hovered) setHidden(false);
  }, [hovered]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === inside.length - 1 ? prev : prev + 1));
  };

  const hasInside = inside && inside.length > 0;

  return (
    <div
      className={`relative w-[590px] h-[340px] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slide Content */}
      {hasInside && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <TaskTwoSlidableContainer
            bgImg={inside[currentIndex].bgImg}
            onPrev={handlePrev}
            onNext={handleNext}
          >
            {inside[currentIndex].content}
          </TaskTwoSlidableContainer>
        </motion.div>
      )}


      <motion.div
        className={`absolute top-0 left-0 w-full h-full flex rounded-4xl z-10 ${imagePos === 'right' ? 'flex-row-reverse' : ''}`}
        {...(hasInside
          ? {
              initial: { opacity: 1, x: 0 },
              animate: hovered ? { opacity: 0, x: -900 } : { opacity: 1, x: 0 },
              transition: { duration: 0.5 },
              onAnimationComplete: () => {
                if (hovered) setHidden(true);
              },
            }
          : {})}
        style={{
          backgroundColor: bgColor,
          visibility: hidden && hasInside ? 'hidden' : 'visible',
          pointerEvents: hovered && hasInside ? 'none' : 'auto',
        }}
      >
        {/* Floating Image */}
        <div className={`absolute ${imagePos === 'left' ? '-left-20' : '-right-5'} -bottom-20 ${customImgPostion}`}>
          <motion.img
            src={imgSrc}
            alt="illustration"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1,
              ease: 'linear',
              delay: imagePos === 'right' ? 1 : 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </div>

        {/* Text */}
        <div className={`w-[65%]  text-white h-full flex flex-col justify-center ${imagePos === 'left' ? 'text-right ml-auto pr-10' : 'text-left mr-auto pl-10'} ${customTextWidth}`}>
          <h1 className="font-secondary-h1 mb-1">{title}</h1>
          <h2 className="font-primary font-medium text-2xl mb-7">{secondTitle}</h2>
          <p className={`font-primary font-regular text-lg leading-6 w-[80%]  ${imagePos === 'left' ? 'ml-auto': "mr-auto" }`} >{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskTwoContainer;
