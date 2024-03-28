import TaskInput from './components/input'
import ListItem from './components/itemList'

function App() {
  return (
    <>
     <div className="w-3/4 mx-auto my-20 bg-red-100 p-2 rounded-xl lg:w-1/2 lg:p-4">
        <h1 className="text-center text-black font-bold uppercase my-4 text-2xl">To-Do List</h1>

        <TaskInput/>
        <ListItem/>

        <div className="text-center w-1/2 mx-auto bg-rose-200 p-2 rounded-xl font-semibold lg:w-40">
            <span className="p-1">Done: 0</span>
        </div>
     </div>
    </>
  )
}

export default App
