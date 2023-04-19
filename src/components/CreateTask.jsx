import React from 'react'

const CreateTask = ({ tasks, setTasks }) => {
    return (
        <form>
            <input type="text" className='border-2 border-slate-400' />
            <button>Create</button>
        </form>
    )
}

export default CreateTask