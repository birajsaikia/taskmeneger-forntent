// src/components/TaskPage.jsx

import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from '@mui/material';
import { addTask, getTasks, deleteTask, updateTask } from '../api';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({ title: '', description: '' });
  const [editMode, setEditMode] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Fetch tasks when component is mounted or after any update
  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // Handle input changes for title and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  // Handle form submission (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      await updateTask(taskToEdit._id, taskData); // Update task
    } else {
      await addTask(taskData); // Add new task
    }

    setTaskData({ title: '', description: '' }); // Clear form after submit
    setEditMode(false);
    setTaskToEdit(null);

    // Re-fetch tasks
    const data = await getTasks();
    setTasks(data);
  };

  // Handle task edit
  const handleEdit = (task) => {
    setTaskData({ title: task.title, description: task.description });
    setEditMode(true);
    setTaskToEdit(task);
  };

  // Handle task deletion
  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    const data = await getTasks();
    setTasks(data);
  };

  return (
    <Container maxWidth="md">
      {/* Header */}
      <Box textAlign="center" my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          {editMode ? 'Edit Task' : 'Add Task'}
        </Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <form onSubmit={handleSubmit}>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  {editMode ? 'Update Task' : 'Add Task'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>

      {/* Task List */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Task List
        </Typography>
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task._id}
              sx={{
                border: '1px solid #ccc',
                marginBottom: '8px',
                borderRadius: '4px',
                padding: '8px',
              }}
            >
              <ListItemText
                primary={<Typography variant="h6">{task.title}</Typography>}
                secondary={
                  <Typography variant="body2">{task.description}</Typography>
                }
              />
              <Box>
                <Button
                  onClick={() => handleEdit(task)}
                  variant="outlined"
                  color="primary"
                  sx={{ marginRight: 1 }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(task._id)}
                  variant="outlined"
                  color="secondary"
                >
                  Delete
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TaskPage;
