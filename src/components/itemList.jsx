
function ListItem() {
    return(
      <div className="my-4 flex flex-col gap-1">
        <ul>
        <li className="flex justify-between items-center bg-red-50 p-2 rounded-lg">
          <div className="flex gap-2 items-center">
              <input type="checkbox"/>
              <p className="text-black">task 1 task 1 task 1 task 1</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer hover:text-gray-600 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </div>
        </li>
        </ul>

        <ul>
        <li className="flex justify-between items-center bg-red-50 p-2 rounded-lg">
          <div className="flex gap-2 items-center">
              <input type="checkbox"/>
              <p className="text-black">task 2 task 2 task 2 task 2</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer hover:text-gray-600 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </div>
        </li>
        </ul>

        <ul>
        <li className="flex justify-between items-center bg-red-50 p-2 rounded-lg">
          <div className="flex gap-2 items-center">
              <input type="checkbox"/>
              <p className="text-black">task 3 task 3 task 3 task 3</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer hover:text-gray-600 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </div>
        </li>
        </ul>

        <ul>
        <li className="flex justify-between items-center bg-red-50 p-2 rounded-lg">
          <div className="flex gap-2 items-center">
              <input type="checkbox"/>
              <p className="text-black">task 4 task 4 task 4 task 4</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer hover:text-gray-600 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </div>
        </li>
        </ul>

      </div>
    )
}

export default ListItem;