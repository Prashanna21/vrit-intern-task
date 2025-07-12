import TaskTwoContainer from '../components/TaskTwoContainer'

import { contentData } from '../data/contentData';


function TaskTwo() {
  return (
  
    <div className='bg-white max-w-[1220px] h-full mx-auto'>

    {/* Text Outside */}
        <div className='self-start mt-10 mb-10'>
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
              imagePos={data?.imagePos}
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