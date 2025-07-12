import { motion } from 'framer-motion';
import type { TTViewAllAnimatedProps } from '../types/types';
import { FaArrowRight } from 'react-icons/fa6';
import { useState } from 'react';


const ViewAllAnimated = ({
  text,
  textColor
}: TTViewAllAnimatedProps) => {
    const [hover, setHover] = useState(false);

  return (
    <button 
    className={`border-none font-semibold ${textColor} flex justify-center gap-2.5 items-center font-primary text-lg cursor-pointer`}
    onMouseOver={() => setHover(true)}
    onMouseLeave ={() => setHover(false)}
    >
        {text}
        <motion.div
            initial={{ x: 0 }}
            animate={
            hover
                ? {
                    x: [0, 7, 0],
                    transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                    }
                }
                : { x: 0 }
            }
      > 
        <FaArrowRight size={16} />
        </motion.div>
        </button>

  );
};

export default ViewAllAnimated;