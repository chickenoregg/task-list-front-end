/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {


    //initialized state variables to empty list - our model in the backendtt is a list
  //changed isComplete to is_complete to match the backend model - tasklist api
  const [tasks, setTasks] = useState([]);

  // add UseEffect
  // GET ALL
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/tasks')
      .then((response) => {
        setTasks(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  // DELETE


  const toggle = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          title: task.title,
          is_complete: !task.is_complete
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
