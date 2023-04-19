import React, { useState } from 'react'
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className='bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16'>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App