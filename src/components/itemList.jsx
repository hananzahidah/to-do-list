function ListItem({task, deleteTask}){
  return(
    <>
    <div className="pb-1">
    <li className="flex justify-between items-center bg-red-50 p-2 rounded-lg ">
      <div className="flex gap-3">
        <input type="checkbox"/>
        <p>{task.taskName} </p>
      </div>
         <svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteTask(task.taskName)} className=" cursor-pointer hover:text-gray-600 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </li>
    </div>
    </>
  )
}

export default ListItem;