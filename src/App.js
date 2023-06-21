import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.js';
import './App.css';

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

  const [tasks, setTasks] = useState([]);
  const API = 'https://task-list-api-c17.onrender.com';

  useEffect(() => {
    axios.get(API)
    .then((result) => {
      setTasks(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const checkCompleteness = (id) => {
    for (let task of tasks) {
      if (task.id === id) {
        if (task.is_complete === true) {
          return true;
        }
        return false;
      }
    }
  }; 

  const toggle = (id) => {
    const endp = checkCompleteness(id) ? 'mark_incomplete': 'mark_complete';
    axios
      .patch(`${API}/${id}/${endp}`)
      .then((result) => {
        console.log(result.data);
        const updatedTask = tasks.map((task) => {
          if (task.id === id) {
            return {
              id: task.id,
              title: task.title,
              // eslint-disable-next-line camelcase
              is_complete: !task.is_complete
            };
          }
          return task;
      }); setTasks(updatedTask);
    })
      .catch((err) => {
        console.log(err);
      });
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
