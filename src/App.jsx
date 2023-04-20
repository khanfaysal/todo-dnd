import React, { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log('tasks', tasks);

  // useEffect(() => {
  //   setTasks(JSON.parse(localStorage.getItem('tasks')))
  // }, [])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks === null) {
      setTasks([]);
    } else {
      setTasks(storedTasks);
    }
  }, []);
  return (
    <>
      <Toaster />
      <div className='bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16 pt-30'>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}

export default App