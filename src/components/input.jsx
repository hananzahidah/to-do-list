function TaskInput() {
    return (
        <form className="w-full p-1 flex items-center justify-center gap-1">
            <input type="text" placeholder="write here..." className="w-full rounded-sm border border-gray-400 p-1"/>
            <div className=" bg-rose-500 flex w-7 items-center rounded-sm p-1 hover:bg-red-200">
            <button className="text-white flex items-center justify-center w-full font-semibold">+</button>
            </div>
        </form>
    )
}

export default TaskInput;