import { useState } from 'react'
import TaskInput from './components/input'
import ListItem from './components/itemList'

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  }
  
  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
  }

  return (
    <>
     <div className="w-3/4 mx-auto my-20 bg-red-100 p-2 rounded-xl lg:w-1/2 lg:p-4">
        <h1 className="text-center text-black font-bold uppercase my-4 text-2xl">To-Do List</h1>

        <TaskInput addTask={addTask}/>
        {/* <ListItem/> */}

        <div className="py-5">
          <ul>
            {toDoList.map((task, key) => (<ListItem task={task} key={key} deleteTask={deleteTask} />))}
          </ul>
        </div>

        <div className="text-center w-1/2 mx-auto bg-rose-200 p-2 rounded-xl font-semibold lg:w-40">
            <span className="p-1">Done: 0</span>
        </div>
     </div>
    </>
  )
}

export default App

