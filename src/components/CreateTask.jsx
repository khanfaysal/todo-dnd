import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {

    const [task, setTask] = useState({
        id: '',
        name: '',
        status: 'todo'
    });

    console.log(task);
    const handleSubmit = (e) => {
        e.preventDefault();

        setTasks((prev) => {
            const list = [...prev, task];
            localStorage.setItem("tasks", JSON.stringify(list))
            return list;
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className='border-2 border-slate-400 rounded-md mr-4 h-12 w-64 [x-1'
                value={task.name}
                onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
            />
            <button className='bg-cyan-500 rounded-md px-4 h-12 text-white'>Create</button>
        </form>
    )
}

export default CreateTask