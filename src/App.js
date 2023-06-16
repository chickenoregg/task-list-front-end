import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {

  const [tasks, setTasks] = useState(TASKS);

  const toggle = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          title: task.title,
          isComplete: !task.isComplete
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const deleteTask  = (id) => {
    const updatedTask = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(updatedTask);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggle={toggle} deleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
