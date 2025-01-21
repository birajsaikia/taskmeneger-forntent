import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(3); // Show 3 tasks per page
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    const userid = Cookies.get('userid');

    if (!token || !userid) {
      navigate('/signin');
    } else {
      fetchTasks(userid); // Only fetch tasks for the logged-in user
    }
  }, [navigate]);

  const fetchTasks = async (userid) => {
    try {
      const response = await axios.get(
        `https://taskmanager-backend-1-1mjl.onrender.com/api/tasks/${userid}`
      );
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setEditMode(true);
  };

  const handleDelete = async (taskId) => {
    const token = Cookies.get('token');
    const userid = Cookies.get('userid');

    if (!token || !userid) {
      alert('You must be logged in to delete a task.');
      return;
    }

    try {
      await axios.delete(
        `https://taskmanager-backend-1-1mjl.onrender.com/api/tasks/${taskId}`
      );
      fetchTasks(userid); // Refresh tasks for the logged-in user
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskSaved = () => {
    const userid = Cookies.get('userid');
    fetchTasks(userid); // Refresh tasks for the logged-in user after saving
  };

  const handlePageChange = (direction) => {
    let newPage = currentPage;

    if (
      direction === 'next' &&
      currentPage * tasksPerPage < filteredTasks.length
    ) {
      newPage = currentPage + 1; // Move to next page
    } else if (direction === 'prev' && currentPage > 1) {
      newPage = currentPage - 1; // Move to previous page
    }

    setCurrentPage(newPage);
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          Task Management
        </Typography>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
      </Box>

      <TaskForm
        taskToEdit={taskToEdit}
        editMode={editMode}
        onTaskSaved={handleTaskSaved}
      />

      <TaskList
        tasks={currentTasks.reverse()} // Reverse tasks on the current page
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Box textAlign="center" my={4}>
        <Button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          variant="outlined"
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange('next')}
          disabled={currentPage * tasksPerPage >= filteredTasks.length}
          variant="outlined"
          sx={{ ml: 2 }}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default TaskPage;
