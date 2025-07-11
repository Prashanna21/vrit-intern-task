import {useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

import TImage from "../components/TImage";
import ToolTip from "../components/ToolTip";

import image20 from '../assets/images/image 20.png';
import image21 from '../assets/images/image 21.png';
import image1 from '../assets/images/image-1.png';
import image from '../assets/images/image.png';
import testimonial1 from '../assets/images/testimonial-1.png';
import testimonial from '../assets/images/testimonial.png';

import likesGif from '../assets/gifs/likes.gif';
import loveEmojiGif from '../assets/gifs/love-emoji.gif';
import thumbsUpGif from '../assets/gifs/thumbs-up.gif';
import trophyGif from '../assets/gifs/trophy.gif';


import TestinomialVid from "../assets/videos/VideoTestonomial.mp4";



function SectionOne() {
    const [hover, setHover] = useState(false);
    const [float, setFloat] = useState(false);

    const [testimonialHover, setTestimonialHover] = useState(false);
    const [videoTestimonialHover, setVideoTestimonialHover] = useState(false);

    const spring = { type: "spring", stiffness: 300, damping: 20 } as const;

    useEffect(() => {
        console.log(hover)
    }, [hover]);

    return (
        <div className="bg-white w-screen h-screen flex items-center justify-center relative overflow-hidden">

        {/* For hover area */}
            <div className="w-3/4 h-3/4  flex items-center justify-center cursor-pointer" 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => {setHover(false) 
                setFloat(false)}}>
            
        {/* Main Wrapper */}
            <div 
                className="relative" 
                >
               
                {/* Text Part */}
               <div className="text-center flex flex-col gap-4 text-black-900">
                <p className="font-primary text-2xl text-base-black">Hear How They Level Up Their Game!</p>
                <h1 className="font-secondary text-custom-h1 font-bold" >Skill <span className="text-primary">Masters</span> Unite! 🤝</h1>
                <button className="border-none font-semibold text-base-black flex justify-center items-center font-primary text-lg">View all Testinomials  <FaArrowRight size={16} /></button>
               </div>

                {/* Opposite box grouped grid up and down */}

                {/* Top and bottom left */}
               <TImage
                    src={image20}
                    className="absolute -bottom-26 left-[25%] -translate-x-1/2"
                    animate={
                        hover
                          ? float
                            ? { x: -120, y: [110, 65, 110] }
                            : { x: -120, y: 120 } 
                          : { x: 0, y: 0 }
                      }
                      transition={
                        float
                          ? {
                              duration: 4,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }
                          : spring
                      }
                      onAnimationComplete={() => {
                        if (hover && !float) {
                          setFloat(true);
                        }
                      }}
                    />

                    <motion.div 
                        className="absolute -top-26 left-[25%] -translate-x-1/2  z-50"
                        onMouseEnter={() => setTestimonialHover(true)} 
                        onMouseLeave={() => setTestimonialHover(false)}
                        animate={
                            hover
                            ? float
                                ? { x: -120, y: [-110, -155, -110] }
                                : { x: -120, y: -120 }
                            : { x: 0, y: 0 }
                        }
                        transition={
                            float
                            ? {
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                                }
                            : spring
                        }
                    >
                    {/* Div with Testinomial */}
                    <div className="relative">
                        {testimonialHover && (

                        <ToolTip position="bottom">
                            <div 
                                className="w-[290px] p-2 font-primary text-xs">
                                    I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I have recommended the same course to my data-enthusiast friends."
                                    
                                    <div className="text-right">
                                   <span className="font-bold"> Rajesh Dhakal</span> <br></br>
                                    Digital Marketing Student
                                    </div>
                                    </div>
                        </ToolTip>
                        )}

                        { testimonialHover && <ToolTip position="right" delay={0.8}>
                            <div className="px-2 py-1 font-primary text-xs">
                            Amazing ⭐⭐⭐⭐⭐
                            </div>
                        </ToolTip>}
                        <TImage
                        src={testimonial}
                        className={` ${testimonialHover ? 'border-[#B9E2D5] border-5' : ''}`}
                        hoverEffect={true}
                        />
                    </div>
                    </motion.div>


            {/* Sides  */}

                <TImage
                src={image21}
                className="absolute top-1/3 -translate-y-1/2 -right-35"
                animate={
                    hover
                    ? float
                        ? { x: 80, y: [0, -30, 0] }
                        : { x: 80, y: 0 }
                    : { x: 0 }
                }
                transition={float ? { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } : spring}
                />

                <TImage
                src={image1}
                className="absolute top-1/3 -translate-y-1/2 -left-35 z-0"
                animate={
                    hover
                    ? float
                        ? { x: [-80] , y: [0, 30, 0] }
                        : { x: -80, y: 0 }
                    : { x: 0 }
                }
                transition={float ? { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } : spring}
                />




            {/* Top and bottom right */}
                <TImage
                src={image}
                className="absolute -top-26 right-0"
                animate={
                    hover
                    ? float
                        ? { x: [80], y: [-100, -45, -100] }
                        : { x: 80, y: -100 }
                    : { x: 0, y: 0 }
                }
                transition={float ? { duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" } : spring}
                />

                <motion.div
                    className="absolute -bottom-26 right-0 z-50"
                    onMouseEnter={() => setVideoTestimonialHover(true)}
                    onMouseLeave={() => setVideoTestimonialHover(false)}
                    animate={
                        hover
                        ? float
                            ? { x: 80, y: [65, 110, 65] }
                            : { x: 80, y: 65 }
                        : { x: 0, y: 0 }
                    }
                    transition={
                        float
                        ? {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            }
                        : spring
                    }
                >
                {/* Wrapper for image and tooltip */}
                <div className="relative">
                    {videoTestimonialHover && (
                    <ToolTip position="top">
                        <iframe 
                        width="120px"
                        height="214px"
                        src={TestinomialVid} 
                        className="rounded-lg"
                        />
                    </ToolTip>
                    )}

                    <TImage
                    src={testimonial1}
                    className={` ${videoTestimonialHover ? 'border-[#B9E2D5] border-5' : ''}`}
                    hoverEffect={true}
                    />
                </div>
                </motion.div>


                {/* Gifs */}
                <TImage
                    src={likesGif}
                    className="absolute -bottom-3 -right-24 translate-y-1/2"
                    animate={hover ? { x: 64, y: 64 } : { x: 0, y: 0 }}
                    transition={spring}
                />
                <TImage
                    src={loveEmojiGif}
                    className="absolute -bottom-4 -left-24 translate-y-1/2"
                    animate={hover ? { x: -64, y: 64 } : { x: 0, y: 0 }}
                    transition={spring}
                />




                <TImage
                    src={thumbsUpGif}
                    className="absolute -top-24 left-1/2 -translate-x-1/2"
                    animate={hover ? { y: -80 } : { y: 0 }}
                    transition={spring}
                />
                <TImage
                    src={trophyGif}
                    className="absolute -bottom-24 left-1/2 -translate-x-1/2"
                    animate={hover ? { y: 80 } : { y: 0 }}
                    transition={spring}
                />

            </div>


            </div>        

        </div>
    )

}

export default SectionOne;