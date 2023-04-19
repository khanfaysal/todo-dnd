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
            {todoStatuses.map((todoStatus, index) => <Section key={index} todoStatus={todoStatus} />)}
        </div>
    )
}

export default ListTasks;

const Section = ({ todoStatus }) => {
    return (
        <>
            <h2>{todoStatus}</h2>
        </>
    )
}