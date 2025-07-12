
import { useState } from 'react';
import TaskThreeContainerOpen from '../components/TaskThreeContainerOpen';


function TaskThree() {
  const [boxOneOpen, setBoxOneOpen] = useState(true);
  const [boxTwoOpen, setBoxTwoOpen] = useState(false);
  const [boxThreeOpen, setBoxThreeOpen] = useState(false);



  return (
    <div className='w-full max-w-[1220px] mx-auto mt-15 '>
      {/* Upper Text Part */}
      <div>
        <h3 className='font-primary text-2xl font-regular'>Explore our classes and master trending skills</h3>
        <h3 className='font-secondary-h1'>Dive Into <span className='text-primary'>What's Hot Right Now!</span> 🔥</h3>
      </div>

      <div className='flex justify-around gap-5 mt-15 '>
        <div onClick={() => {
          setBoxOneOpen(true);
          setBoxTwoOpen(false);
          setBoxThreeOpen(false);
        }}>
          <TaskThreeContainerOpen open= {boxOneOpen} title='23' secondtitle='All Courses' content="courses you're powering through right now" />
        </div>

        <div onClick={() => {
          setBoxOneOpen(false);
          setBoxTwoOpen(true);
          setBoxThreeOpen(false);
        }}>
          <TaskThreeContainerOpen open= {boxTwoOpen} title='23' secondtitle='All Courses' content="courses you're powering through right now" />
        </div>


        <div onClick={() => {
          setBoxOneOpen(false);
          setBoxTwoOpen(false);
          setBoxThreeOpen(true);
        }}>
          <TaskThreeContainerOpen open= {boxThreeOpen} title='23' secondtitle='All Courses' content="courses you're powering through right now" />
        </div>
      </div>
      
      


    </div>
  );


}


export default TaskThree;