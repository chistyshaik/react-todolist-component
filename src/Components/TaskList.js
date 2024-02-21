import React, { useContext } from 'react';
import { TaskContext } from './TaskContainer';

export default function TaskList() {
  const { tasks = [] } = useContext(TaskContext);

  return (
    <div className="bg-blue-100">
      <h3 className="bg-blue-500 p-2 text-white text-2xl text-center">
        Task List
      </h3>
      <ul>
        {tasks.map((task) => (
          <TaskView task={task} />
        ))}
      </ul>
    </div>
  );
}

function TaskView({ task }) {
  const { handleUpdate, handleDelete } = useContext(TaskContext);
  const { id, name, completed } = task;

  const handleChange = (event) => {
    var status = event.target.checked;
    handleUpdate(!completed, id);
  };

  const deleteItem = (event) => {
    handleDelete(id);
  };

  let className = `${
    completed ? 'line-through' : ''
  }  p-2 px-4 border-b flex items-center`;

  return (
    <li className={className}>
      <input onChange={handleChange} type="checkbox" checked={completed} />
      {id}. {name}
      <button
        onClick={deleteItem}
        className="ml-auto w-6 h-6 rounded flex items-center justify-center text-white bg-slate-700 hover:opacity-80"
      >
        x
      </button>
    </li>
  );
}
