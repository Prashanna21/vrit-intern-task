import './App.css'
import TaskOne from './pages/TaskOne'
import TaskTwo from './pages/TaskTwo'
import TaskLast from './pages/TaskFour'
import TaskThree from './pages/TaskThree'
import MyInfo from './pages/MyInfo'




function App() {

  return (
    <>
      <div className='w-ful'>

      <h1 className='font-secondary-h1 w-full text-center mt-4'>Task <span className='text-primary'>One </span></h1>
      <TaskOne />

      <h1 className='font-secondary-h1 w-full text-center mt-4'>Task <span className='text-primary'>Two </span></h1>
      <TaskTwo />

      <h1 className='font-secondary-h1 w-full text-center mt-20'>Task <span className='text-primary'>Three </span></h1>
      <TaskThree />

      <h1 className='font-secondary-h1 w-full text-center mt-20'>Task <span className='text-primary'>Four </span></h1>
      <TaskLast />


      <MyInfo />
      </div>
    </>
  )
}

export default App
