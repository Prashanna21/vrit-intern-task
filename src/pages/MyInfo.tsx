import TaskTwoContainer from '../components/TaskTwoContainer'

import {personalData as myInfoList} from "../data/contentData"

function MyInfo() {
  return (
     <div className='flex justify-center gap-10'>
      <div>
        <h1 className='font-secondary-h1 w-full text-center mt-30 mb-10'>ABOUT <span className='text-primary'>ME </span></h1>
          <div className='flex gap-10'>
            {myInfoList.map((info, index) => (
            <TaskTwoContainer
              key={index}
              bgColor={info.bgColor}
              customImgPostion={info?.customImgPostion}
              imgSrc={info.imgSrc}
              title={info.title}
              imagePos={info?.imagePos}
              secondTitle={info.secondTitle}
              customTextWidth={info?.customTextWidth}
              content={info.content}
              inside={info?.inside}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default MyInfo