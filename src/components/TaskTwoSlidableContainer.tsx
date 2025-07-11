import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
 
import type {  TaskTwoSliderContainerProps } from '../types/types';


const TaskTwoSlidableContainer = ({
    children,
    bgImg,
    onNext,
    onPrev
}: TaskTwoSliderContainerProps) => {

    

    
  return (
    <div className={`w-[590px] relative h-[340px] flex rounded-4xl `}
        style={{
            backgroundImage: `url(${bgImg})`
        }}
    >
        {children}

        {/* Right Arrow */}
        <div 
            className='cursor-pointer bg-white w-14 h-14 rounded-full flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 shadow-xl'
            style={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.45)' }} 
            onClick={onNext}
            >
                <FaArrowRight className=''/>
        </div>

         {/* Left Arrow */}
         <div 
            className='cursor-pointer bg-white w-14 h-14 rounded-full flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 shadow-xl'
            style={{ boxShadow: '0 5px 10px rgba(0, 0, 0, 0.45)' }}
            onClick={onPrev}>
                <FaArrowLeft className=''/>
        </div>
    </div>
  );
};

export default TaskTwoSlidableContainer;