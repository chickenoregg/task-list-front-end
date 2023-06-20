/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, is_complete, toggle, deleteTask }) => {
  const buttonClass = is_complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => toggle(id)}
      >
        {title}
      </button>
      <button 
        className="tasks__item__remove button"
        onClick={()  => deleteTask(id)}
      >x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  is_complete: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task;
