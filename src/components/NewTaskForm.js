/* eslint-disable camelcase */

import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_FORM_DATA = {
  title: '',
  description: '',
  is_complete: null,
};


const NewTaskForm = ({ createTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    descriptipn: "",
    is_complete: false
  });

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(formData);
    setFormData(DEFAULT_FORM_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="is_complete">Is Complete</label>
      <input
        type="bool"
        id="is_complete"
        name="is_complete"
        value={formData.is_complete}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
     
};

NewTaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default NewTaskForm;