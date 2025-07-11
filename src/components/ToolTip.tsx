import React from 'react';
import { motion } from 'framer-motion';
import type { ToolTipProps } from '../types/types';
import { RiTriangleFill } from "react-icons/ri";

const ToolTip = ({
  children,
  className = '',
  position = 'top',
  delay = 0,
}: ToolTipProps) => {


  const positionClass =
    position === 'bottom'
      ? 'absolute -bottom- left-1/2 -translate-x-1/2 translate-y-1/2'
      : position === 'top'
      ? 'absolute -top-53 left-1/2 -translate-x-1/2'
      : position === 'right'
      ? 'absolute top-1/2 left-full -translate-y-1/2'
      : '';

    const triangleStyle = 
      position === 'bottom'
      ? { top: '0%', left: '50%', transform: 'translate(-50%, -65%)' }
      : position === 'right'
      ? { bottom: '50%', left: '0%', transform: 'translate(-80%, 50%) rotate(-90deg)', }
      : position === 'top'
      ? { top: '94%', left: '50%', transform: 'translate(-50%, 50%) rotate(180deg)', }
      : "";


  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md text-xs px-2 py-1 z-50 ${positionClass} ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}

      style={{
        boxShadow: `
          0px 8px 24px -3px rgba(16, 24, 40, 0.1),
          0px 8px 24px -3px rgba(16, 24, 40, 0.05)
        `
      }}

    >
      {/* Triganlge*/}
      <RiTriangleFill className="text-white absolute" style={{ fontSize: '20px', ...triangleStyle}} />

      {children}
    </motion.div>
  );
};

export default ToolTip;
