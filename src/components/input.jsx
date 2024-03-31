import { useState } from "react";

function TaskInput({addTask}) {
    const [task, setTask] = useState('');

    function handleInputValue(event) {
        setTask(event.target.value)
    }

    function handleAddTask(event) {
        event.preventDefault()
        if(task.trim()==='') return;
        addTask(task);
        setTask('')
    }

    return (
        <form className="w-full p-1 flex items-center justify-center gap-1" onSubmit={handleAddTask}>
            <input type="text" placeholder="write here..." value={task} className="w-full rounded-sm border border-gray-400 p-1" onChange={handleInputValue}/>
            <div className=" bg-rose-500 flex w-7 items-center rounded-sm p-1 hover:bg-red-200">
            <button className="text-white flex items-center justify-center w-full font-semibold">+</button>
            </div>
        </form>
    )
}

export default TaskInput;