import React, { useState, createContext, useReducer } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

export const TaskContext = createContext();

const initialState = [
  { id: 1, name: 'Learn HTML', completed: false },
  { id: 2, name: 'Learn CSS', completed: true },
  { id: 3, name: 'Learn js', completed: false },
];

function taskManagement(state = initialState, action = {}) {
  const { type, payload } = action;

  if (type === 'ADD_TASK') {
    return [...state, payload];
  }

  if (type === 'UPDATE_TASK') {
    return state.map((task) => {
      if (task.id === payload.taskId) {
        task.completed = payload.status;
      }
      return task;
    });
  }

  if (type === 'DELETE_TASK') {
    return state.filter((task) => task.id !== payload);
  }

  return state;
}

export default function TaskContainer() {
  // const [tasks, setTasks] = useState(taskManagement());
  const [tasks, dispatch] = useReducer(taskManagement, initialState);

  const handleAdd = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    const action = {
      type: 'ADD_TASK',
      payload: newTask,
    };
    // const state = taskManagement(tasks, action);
    // setTasks(state);
    dispatch(action);
  };

  const handleUpdate = (status, taskId) => {
    const action = {
      type: 'UPDATE_TASK',
      payload: { taskId, status },
    };
    // const state = taskManagement(tasks, action);
    // setTasks(state);
    dispatch(action);
  };

  const handleDelete = (taskId) => {
    const action = {
      type: 'DELETE_TASK',
      payload: taskId,
    };
    // const state = taskManagement(tasks, action);
    // setTasks(state);
    dispatch(action);
  };

  const value = {
    tasks,
    handleAdd,
    handleUpdate,
    handleDelete,
  };

  return (
    <TaskContext.Provider value={value}>
      <div className="shadow">
        <TaskList />
        <AddTask />
      </div>
    </TaskContext.Provider>
  );
}
