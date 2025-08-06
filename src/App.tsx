import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState<{task: string, completed: boolean}[]>([]);
  const [inputVal, setInputVal] = useState('');

  const addTask = (value: string) => {
    const trimmed = value.trim();
    if(!trimmed) return;
    setTasks((prev) => [...prev, {task: trimmed, completed: false}]);
    setInputVal('')
  };

  const toggleTask = (index: number) => {
    setTasks((prev) => prev.map((task, i) => (i === index ? {...task, completed: !task.completed} : task)))
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(inputVal);
  };

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-gray-200 h-96 w-96 rounded-lg'>
        <h1 className='text-gray-400 text-5xl text-center font-extralight mt-6 mb-3'>todos</h1>
        
        <form onSubmit={handleSubmit} className='relative'>

            <input type="text" name="todo" value={inputVal} placeholder='Add todo...' 
            onChange={(e) => setInputVal(e.target.value)}
            className='bg-white rounded-3xl shadow-gray-400 shadow px-3 py-2 mt-6 w-[22rem] pr-12'/>
            <button type='submit'
            aria-label='Add todo'
            className='bg-green-700 absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer'>
              <FaPlus className='text-white text-sm'/>
            </button>
            </form>

            <div className='mt-4 flex flex-col'>
              {tasks.map((task, index) => (
                
                  <div key={index}
                  className='flex items-center'
                  >
                <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)} />
                <p>{task.task}</p>
              </div>
                )
              )}

            </div>
          
    
        </div>
      </div>
        
      
    </>
  )
}

export default App
