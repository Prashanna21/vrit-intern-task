import { motion } from 'framer-motion';
import type { TTContainerOpenProps } from '../types/types';
import { useState, useEffect } from 'react';


import ViewAllAnimated from './ViewAllAnimated';
import Task3Img from "../assets/images/Task3Img.png"

import ScribbleImg from "../assets/images/ScribbleIimg.png"

const TaskThreeContainerOpen = ({
  title,
  secondtitle,
  content,
  open = false,
}: TTContainerOpenProps) => {

  const [showCircle, setShowCircle] = useState(false);
  const [closing, setClosing] = useState(false);
  const [delayedOpen, setDelayedOpen] = useState(open); 

  const [hover, setHover] = useState(false);

//   For animations reverse effect circle animatio
  useEffect(() => {
    if (open) {
      setShowCircle(true);
      setClosing(false);
      setDelayedOpen(true);
    } else {
      setShowCircle(true);
      setClosing(true);


      const timeout = setTimeout(() => {
        setShowCircle(false);
        setDelayedOpen(false);
      }, 600); 
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (

    <div className='relative'>

        {/* For Click me */}
         {hover && !open &&

                (
                    <div className='absolute -top-15 left-1/2 -translate-x-1/2 text-5xl  z-50 flex flex-col items-center'> 
                        <div className='text-lg font-regular font-primary -mb-2'> Click me! </div>
                        <div><img src={ScribbleImg} /></div>
                     </div>
                )
        }   


        <div 
            className="relative overflow-hidden h-[461px] rounded-4xl"
            onMouseOver={() => setHover(true)}
            onMouseLeave ={() => setHover(false)}
        >

           


        <motion.div
            className="absolute inset-0 z-0"

            style={{ backgroundColor: delayedOpen ? "#C33241" : '#F9EBEC',}}

        />


        {showCircle && (
            <motion.div
                className="absolute z-10 rounded-full"
                initial={{ scale: closing ? 0 : 10, opacity: 1 }}
                animate={{ scale: closing ? 10 : 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#F9EBEC',
                    bottom: -40,
                    left: -40,
                }}
                />
            )}


            <motion.div
                className="relative z-20 h-full rounded-4xl px-10 py-8"
                animate={{
                width: open ? '592px' : '280px',
                }}
                transition={{
                width: {
                    duration: 2,
                    type: 'spring',
                    stiffness: 100,
                    damping: 18,
                },
                }}
                style={{
                backgroundColor: 'transparent',
                }}
            >
                <div className='text-white font-primary flex flex-col'>

                    <div className={` ${open === false ? "hidden": " "} ml-auto mt-5`}>
                        <ViewAllAnimated text='View All Courses ' textColor='text-white'/>

                    </div>

                    <motion.div
                        initial={{ 
                            x: -200,
                            y: 0,
                        }}
                        animate={{ 
                            x: open ? 0 :  [-200]
                        }}
                        transition={{

                            type: "spring",
                            stiffness: 200,
    
                            mass: 1,
                        }}
                        className={` ${open === false ? "hidden": " "} mx-auto mt-16`}>
                            <img src={Task3Img} />
                    </motion.div>
                    
                </div>

                <div className= {`font-primary flex items-center gap-3 ${open ? "text-white" : "text-[#C33241]"}`}>

                    {/* Plus in top and big letter */}
                    <div className='font-secondary font-bold text-[150px] absolute inline-block bottom-20 translate-y-1/2'>
                        <div className='relative'>
                            {title} 
                            <h2 className='absolute top-4 -right-4 text-6xl'>+</h2>
                        </div>
                    </div>

                    <motion.div
                        initial={{ 
                            x: 0,
                            y: 0,
                            rotate: 0, opacity: 1 
                        }}
                        animate={{ 
                            x: open ? 0 :  240, y: open ? 0: -120,
                            rotate: open ? 0 :  -90, opacity: 1 
                        }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 70,
    
                            mass: 0.7,
                        }}
                        style={{ transformOrigin: 'bottom left' }}
                        className='flex flex-col gap-2 absolute bottom-12 right-10 w-[290px]'>
                            <h2 className='font-primary font-bold text-3xl'>{secondtitle}</h2>
                            <p className='font-primary font-normal text-lg'> {content}</p>
                    </motion.div>

                </div>
            </motion.div>
        </div>'
    </div>
  );
};

export default TaskThreeContainerOpen;
