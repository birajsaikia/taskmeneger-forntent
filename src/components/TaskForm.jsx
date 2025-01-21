// src/components/TaskForm.jsx

import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';

const TaskForm = ({ taskToEdit, editMode, onTaskSaved }) => {
  const [taskData, setTaskData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (editMode && taskToEdit) {
      setTaskData({
        title: taskToEdit.title,
        description: taskToEdit.description,
      });
    }
  }, [editMode, taskToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    const userid = Cookies.get('userid');

    if (!token || !userid) {
      alert('You must be logged in to add a task.');
      return;
    }

    const taskPayload = {
      title: taskData.title,
      description: taskData.description,
      userid,
    };

    try {
      if (editMode) {
        await axios.put(
          `http://localhost:5000/api/tasks/${taskToEdit._id}`,
          taskPayload
        );
      } else {
        await axios.post('http://localhost:5000/api/tasks', taskPayload);
      }

      setTaskData({ title: '', description: '' }); // Reset form after submission
      onTaskSaved(); // Notify parent component to refresh tasks
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          {editMode ? 'Edit Task' : 'Add Task'}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Description"
              name="description"
              value={taskData.description}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {editMode ? 'Update Task' : 'Add Task'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TaskForm;
