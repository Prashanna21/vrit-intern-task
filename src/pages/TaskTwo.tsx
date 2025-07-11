import React from 'react'
import TaskTwoContainer from '../components/TaskTwoContainer'
import type { TaskTwoContainerProps } from '../types/types';

import TaskTwoImg1 from "../assets/images/TaskTwoImg1.png"
import TaskTwoImage2 from "../assets/images/Group.png"
import TaskTwoImage3 from "../assets/images/Group-1.png"
import TaskTwoImage4 from "../assets/images/Group-2.png"


import subtractMint from "../assets/images/SubtractMint.png"
import subtractRed from "../assets/images/SubtractRed.png"

import task2Img1 from "../assets/images/task2Img1.png"
import task2Img2 from "../assets/images/task2Img2.png"
import task2Img3 from "../assets/images/Task2Img3.png"



const contentData: TaskTwoContainerProps[] = [
    { 
        imgSrc: TaskTwoImg1,
        title: 'Start with Clarity',
        secondTitle: 'Step into a better learning path.',
        content: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        imagePos: 'left',
        bgColor: '#F45B5B',
        inside : [
                {
                  bgImg: subtractRed,
                  content: <div className='h-full w-full relative'> 
                    <img className='mt-4' src={task2Img1} />

                    <p className=' absolute top-10 right-10 font-secondary text-white font-semibold text-xl w-[241px]'> Clarity unlocked—stickers, sips, and skills all in one go!</p>
                  </div>
                }

        ]
    },

    { 
        imgSrc: TaskTwoImage2,
        title: 'Learn by Doing',
        secondTitle: 'Practical skills, real projects.',
        content: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
        imagePos: 'right',
        bgColor: '#5492A0',
        inside : [

            {
                bgImg: subtractMint,
                content: <div className='h-full w-full relative'> 
                  <img className='absolute -right-12 bottom-0' src={task2Img2} />

                  <p className=' absolute top-10 left-15 font-secondary text-white font-semibold text-xl w-[251px]'> Focused faces—learning mode: ON!</p>
                </div>
              },


              {
                bgImg: subtractMint,
                content: <div className='h-full w-full relative'> 
                  <img className='absolute right-1/2 translate-x-1/2 bottom-0' src={task2Img3} />

                  <p className=' absolute top-10 right-1/2 translate-x-1/2 text-center font-secondary text-white font-semibold text-xl w-[353px]'> Laptops, lessons, and a whole lot of growth!</p>
                </div>
              },
          ],
    },

    { 
        imgSrc: TaskTwoImage3,
        title: 'Get Mentored & Supported',
        secondTitle: "You're not learning alone.",
        content: "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
        imagePos: 'left',
        bgColor: '#6C64A8',
        customTextWidth : 'w-[78%]',
        customImgPostion: '-right-50'
    },


    { 
        imgSrc: TaskTwoImage4,
        title: 'Start with Clarity',
        secondTitle: 'Step into a better learning path.',
        content: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        imagePos: 'right',
        customImgPostion: "-right-15",
        customTextWidth: "w-[55%]",
        bgColor: '#5492A0'
    },

    ]


function TaskTwo() {
  return (
  
    <div className='bg-white w-full max-w-[1220px] h-full mx-auto'>

    {/* Text Outside */}
        <div className='self-start mt-20 mb-10'>
            <p className='font-primary text-2xl text-black-900 font-medium mb-4'>Your SkillShikshya Journey</p>
            <h1 className='text-custom-h1 text-base-black font-secondary font-bold'>
            <span className="text-primary">Step</span> In. 
            <span className="text-primary"> Skill </span> Up. <span className="text-primary"> Stand </span> Out. 🚀</h1>
        </div>

        <div className=' w-full grid grid-cols-2 gap-y-10'>
            {contentData.map((data, index) => (
            <TaskTwoContainer
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            secondTitle={data.secondTitle}
            content={data.content}
            imagePos={data.imagePos}
            bgColor={data.bgColor}
            inside={data?.inside}
            customTextWidth={data?.customTextWidth}
            customImgPostion={data?.customImgPostion}
            />
      ))}

      
        </div>

    </div>
  )
}

export default TaskTwo