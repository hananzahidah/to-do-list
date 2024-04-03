// import { useState } from 'react'
// import TaskInput from './components/input'
// import ListItem from './components/itemList'

// function App() {
//   const [toDoList, setToDoList] = useState([]);

//   const addTask = (taskName) => {
//     const newTask = {taskName, checked: false};
//     setToDoList([...toDoList, newTask])
//   }

//   function deleteTask(deleteTaskName) {
//     setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
//   }

//   return (
//     <>
//      <div className="w-3/4 mx-auto my-20 bg-red-100 p-2 rounded-xl lg:w-1/2 lg:p-4">
//         <h1 className="text-center text-black font-bold uppercase my-4 text-2xl">To-Do List</h1>

//         <TaskInput addTask={addTask}/>

//         <div className="py-5">
//           <ul>
//             {toDoList.map((task, key) => (<ListItem task={task} key={key} deleteTask={deleteTask} />))}
//           </ul>
//         </div>

//         <div className="text-center w-1/2 mx-auto bg-rose-200 p-2 rounded-xl font-semibold lg:w-40">
//             <span className="p-1">Done: </span>
//         </div>
//      </div>
//     </>
//   )
// }

// export default App



import React, { useState } from "react";
import AddNewTask from "./components/AddTask.jsx";
import TaskList from "./components/newTask.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  return (
    <div className="w-3/4 mx-auto my-20 bg-amber-100 p-2 rounded-xl lg:w-1/2 lg:p-4">
      <div className="flex flex-col space-y-6 p-4">
        <h1 className="text-center text-black font-bold uppercase my-4 text-2xl">
          To Do List
        </h1>

        <div className="sticky top-5 z-10">
          <AddNewTask onAddTask={addTask} />
        </div>

        <div className="bg-white w-full rounded-md shadow-lg relative transition-all duration-500">
          {tasks.length ? (
            <TaskList
            tasks={tasks}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
            onToggleCompleted={toggleCompleted}
            />
          ) : (
            <div className=" w-full py-10 flex items-center justify-center">
              <p className=" text-gray-500 text-center ">Your list are empty</p>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 mx-auto rounded-full sticky bottom-5 shadow-lg bg-gray-200 flex items-center justify-center text-gray-500 border-b ">
            <p className="text-gray-500 px-2 py-3">
              ({getCompletedTasks().length}) tasks done
            </p>
            <p className="text-gray-500 px-2 py-3">
              ({getRemainingTasks().length}) tasks left 
            </p>
          </div>
      </div>
    </div>
  );
}

export default App;