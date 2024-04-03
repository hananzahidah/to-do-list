import React, { useState } from "react";

const AddNewTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex space-x-2 items-center rounded-full bg-white shadow-lg">
        <input
          className=" bg-transparent w-full pl-10 py-2 text-lg outline-none"
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="font-semibold p-4 px-10 rounded-full text-black bg-amber-300 hover:bg-gray-300" type="submit">
        Add
        </button>
      </div>
    </form>
  );
};

export default AddNewTask;