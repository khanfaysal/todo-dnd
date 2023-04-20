import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        const filterTodos = tasks.filter(task => task.status === 'todo');
        const filterProgress = tasks.filter(task => task.status === 'inProgress');
        const filterClosed = tasks.filter(task => task.status === 'closed');

        setTodos(filterTodos)
        setInProgress(filterProgress)
        setClosed(filterClosed)
    }, [tasks]);

    const statuses = ['todo', 'inprogress', 'closed'];


    return (
        <div className='flex gap-16'>
            {statuses.map((status, index) => <Section key={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} closed={closed} />)}
        </div>
    )
}

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    let text = 'Todo';
    let bg = 'bg-slate-500';
    let tasksToMap = todos;

    if (status === 'inprogress') {
        text = 'In Progress'
        bg = 'bg-purple-500'
        tasksToMap = inProgress
    }
    if (status === 'closed') {
        text = 'Closed'
        bg = 'bg-green-500'
        tasksToMap = closed
    }

    const addItemToSection = (id) => {
        console.log('dropped', id, status);
        setTasks((prev) => {
            const mTasks = prev.map(t => {
                if (t.id === id) {
                    return { ...t, status: status }
                }
                return t;
            })
            return mTasks
        })

    };

    return (
        <div className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ''}`} ref={drop}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />)}
        </div>
    )
}
const Header = ({ text, bg, count }) => {
    return (
        <div>
            <h2 className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>{text}
                <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>{count}</div>
            </h2>
        </div>
    )
}
const Task = ({ task, tasks, setTasks }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    console.log(isDragging);

    const handleRemove = (id) => {
        const fTasks = tasks.filter((t) => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(fTasks));
        setTasks(fTasks);
        toast('Task removed', { icon: "⛑️" })
    }
    return (
        <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? 'opacity-25' : 'opacity-100'}`}>
            <p> {task.name}</p>
            <button className='absolute bottom-1 right-1 text-red-300' onClick={() => handleRemove(task.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>



        </div>
    );
};