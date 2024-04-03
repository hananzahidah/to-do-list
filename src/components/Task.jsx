// import React, { useState } from "react";


// const Task = ({ task, onEditTask, onDeleteTask, onToggleCompleted }) => {
//   const [editing, setEditing] = useState(false);
//   const [title, setTitle] = useState(task.title);

//   const handleEdit = () => {
//     setEditing(true);
//   };

//   const handleCancel = () => {
//     setEditing(false);
//     setTitle(task.title);
//   };

//   const handleDone = () => {
//     if (title.trim()) {
//       onEditTask(task.id, title.trim());
//       setEditing(false);
//     }
//   };

//   const handleDelete = (e) => {
//     e.preventDefault();
//     onDeleteTask(task.id);
//   };

//   const handleToggleCompleted = () => {
//     onToggleCompleted(task.id);
//   };

//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   return (
//     <li className=" mb-1 border-b border-gray-300 space-y-2">
//       {editing ? (
//         <form
//           onSubmit={handleDone}
//           className=" flex items-center justify-between p-1 px-3 w-full bg-gray-200 rounded-md"
//         >
//           <div>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
//               <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
//             </svg>
//           </div>
//           <div className=" flex items-center w-full">
//             <input
//               type="text"
//               value={title}
//               onChange={handleChange}
//               placeholder="edit here..."
//               className="w-full bg-transparent py-3 ml-3 text-lg outline-none"
//             />
//           </div>
//           <div className=" flex space-x-3">
//             <button type="submit">
//               Add
//             </button>
//             <button type="button" onClick={handleCancel}>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className=" flex items-center justify-between p-4 px-3">
//           <div className=" flex items-center gap-3">
//             <input
//               type="checkbox"
//               className="h-4 w-4"
//               checked={task.completed}
//               onChange={handleToggleCompleted}
//             />

//             <span
//               className={` ${
//                 task.completed
//                   ? "line-through text-gray-500 text-lg"
//                   : "text-lg"
//               } `}
//             >
//               {task.title}
//             </span>
//           </div>
//           <div className=" flex items-center gap-3">
//             <button onClick={handleEdit} className="hover:text-sky-700">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//               </svg>

//             </button>
//             <button onClick={handleDelete} className="hover:text-red-600">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// };

// export default Task;

import React, { useState, useRef } from "react";

const Task = ({ task, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const inputRef = useRef(null); // Membuat ref untuk input text

  const handleEdit = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current.focus(); // Setelah state editing diubah menjadi true, tetapkan fokus ke input text
    }, 0);
  };

  const handleCancel = () => {
    setEditing(false);
    setTitle(task.title);
  };

  const handleDone = () => {
    if (title.trim()) {
      onEditTask(task.id, title.trim());
      setEditing(false);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTask(task.id);
  };

  const handleToggleCompleted = () => {
    onToggleCompleted(task.id);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <li className="mb-1 border-b border-gray-300 space-y-2">
      {editing ? (
        <form
          onSubmit={handleDone}
          className="flex items-center justify-between p-1 px-3 w-full bg-amber-50 rounded-md"
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
            </svg>
          </div>
          <div className="flex items-center w-full">
            <input
              ref={inputRef}
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="edit here..."
              className="w-full bg-transparent py-3 ml-3 text-lg outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button type="submit">Add</button>
            <button type="button" onClick={handleCancel}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between p-4 px-3">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" checked={task.completed} onChange={handleToggleCompleted}
/>
            <span className={`${task.completed ? "line-through text-gray-500 text-lg" : "text-lg"}`}>
              {task.title}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleEdit} className="hover:text-sky-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </button>
            <button onClick={handleDelete} className="hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
