import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState<string []>([]);
  const handleClick = (value: string) => {
    setTasks([...tasks, value]);
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-gray-200 h-96 w-96 rounded-lg'>
        <h1 className='text-gray-400 text-5xl text-center font-extralight mt-6 mb-3'>todos</h1>
        
          <div className='relative mt-6 ml-3'>
            <input type="text" name="todo" value={} placeholder='Add todo...' 
            className='bg-white rounded-3xl shadow-gray-400 shadow px-3 py-1 mt-6 w-[22rem] pr-10'/>
            <div className='bg-green-700 absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer'>
              <FaPlus className='text-white text-sm' onClick={() => handleClick}/>
            </div>

            <div className='mt-4 flex flex-col'>
              {tasks.map((task, index) => {
                return (
                  <div key={index}>
                <input type="checkbox" className=''/>
                <p>{task}</p>
              </div>
                )
              })}

            </div>
          </div>
    
        </div>
      </div>
    </>
  )
}

export default App
