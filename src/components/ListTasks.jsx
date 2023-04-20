import React, { useEffect, useState } from 'react'

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

    const todoStatuses = ['todo', 'inprogress', 'closed'];


    return (
        <div className='flex gap-16'>
            {todoStatuses.map((todoStatus, index) => <Section key={index} todoStatus={todoStatus} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} closed={closed} />)}
        </div>
    )
}

export default ListTasks;

const Section = ({ todoStatus, tasks, setTasks, todos, inProgress, closed }) => {
    let text = 'Todo';
    let bg = 'bg-slate-500';
    let tasksToMap = todos;

    if (todoStatus === 'inprogress') {
        text = 'In Progress'
        bg = 'bg-purple-500'
        tasksToMap = inProgress
    }
    if (todoStatus === 'closed') {
        text = 'Closed'
        bg = 'bg-green-500'
        tasksToMap = closed
    }
    return (
        <div className={`w-64`}>
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
    return (
        <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
            <p> {task.name}</p>
            <button className='absolute bottom-1 right-1 text-slate-400'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>



        </div>
    );
};