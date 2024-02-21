import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContainer';

export default function AddTask() {
  const { tasks, handleAdd } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const InputValue = e.target.querySelector('input').value;
    handleAdd(InputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="border flex items-center p-2">
      <input
        className="p-2 flex-1 focus:outline-none"
        type="text"
        placeholder="add text"
      />
      <button className="bg-blue-500 px-5 py-2 rounded text-white hover:bg-blue-200">
        Add
      </button>
    </form>
  );
}
