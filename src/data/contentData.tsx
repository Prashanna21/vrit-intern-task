import type { TaskTwoContainerProps } from '../types/types';

import TaskTwoImg1 from '../assets/images/TaskTwoImg1.png';
import TaskTwoImage2 from '../assets/images/Group.png';
import TaskTwoImage3 from '../assets/images/Group-1.png';
import TaskTwoImage4 from '../assets/images/Group-2.png';

import subtractMint from '../assets/images/SubtractMint.png';
import subtractRed from '../assets/images/SubtractRed.png';

import task2Img1 from '../assets/images/Task2Img1.png';
import task2Img2 from '../assets/images/Task2Img2.png';
import task2Img3 from '../assets/images/Task2Img3.png';


import MyImage from '../assets/images/Prashanna.png';

import LinkedInLogo from '../assets/images/LinkedIn.png';
import GitHubLogo from '../assets/images/GitHub.png';
import CvLogo from '../assets/images/CV.png';



export const contentData: TaskTwoContainerProps[] = [
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

    export const personalData: TaskTwoContainerProps[] = [
  {
    bgColor: '#F45B5B',
    customImgPostion: 'bottom-1 -left-40',
    imgSrc: MyImage,
    title: 'Prashanna Maharjan',
    secondTitle: 'Full Stack Developer',
    customTextWidth: 'w-[94%]',
    content:
      'Self-taught Full Stack Developer skilled in the MERN stack, passionate about tech and always curious to learn and explore new ideas. As a Microsoft Learn Student Ambassador, I enjoy sharing knowledge, connecting with the community, and growing through hands-on experience.',
  },
  {
    imgSrc: TaskTwoImage2,
    title: 'MY LINKS',
    secondTitle: 'Hover over to see',
    content:
      'Explore my key links to learn more about my work and professional journey. Hover over to access my LinkedIn, GitHub, and CV for deeper insights into my projects and skills',
    imagePos: 'right',
    bgColor: '#5492A0',
    inside: [
      {
        bgImg: subtractMint,
        content: (
          <div
            className="h-full w-full relative"
            onClick={() =>
              window.open(
                'https://drive.google.com/drive/folders/1RFpCR6yuhuwDn6Pi8zTrdGJO6GTZCmOS?usp=sharing',
                '_blank',
                'noopener,noreferrer'
              )
            }
            style={{ cursor: 'pointer' }}
          >
            <img
              className="absolute right-1/2 translate-x-1/2 bottom-0 w-64"
              src={CvLogo}
            />
            <p className="absolute top-10 right-1/2 translate-x-1/2 text-center font-secondary text-white font-semibold text-xl w-[353px]">
              Click To View My CV And Certificates
            </p>
          </div>
        ),
      },
      {
        bgImg: subtractMint,
        content: (
          <div
            className="h-full w-full relative"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/prashanna-maharjan-3b974b247/',
                '_blank',
                'noopener,noreferrer'
              )
            }
            style={{ cursor: 'pointer' }}
          >
            <img
              className="absolute right-1/2 translate-x-1/2 bottom-0 w-64"
              src={LinkedInLogo}
            />
            <p className="absolute top-10 right-1/2 translate-x-1/2 text-center font-secondary text-white font-semibold text-xl w-[353px]">
              Click To Check My LinkedIn
            </p>
          </div>
        ),
      },
      {
        bgImg: subtractMint,
        content: (
          <div
            className="h-full w-full relative"
            onClick={() =>
              window.open('https://github.com/Prashanna21', '_blank', 'noopener,noreferrer')
            }
            style={{ cursor: 'pointer' }}
          >
            <img
              className="absolute right-1/2 translate-x-1/2 bottom-0 w-64"
              src={GitHubLogo}
            />
            <p className="absolute top-10 right-1/2 translate-x-1/2 text-center font-secondary text-white font-semibold text-xl w-[353px]">
              Click To Check My Github
            </p>
          </div>
        ),
      },
    ],
  },
];