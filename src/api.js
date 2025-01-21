const API_URL = 'http://localhost:5000/api/tasks';

// Fetch tasks
export const getTasks = async (userid) => {
  try {
    const response = await fetch(`${API_URL}?userid=${userid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

// Add a new task
export const addTask = async (taskData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error('Failed to add task.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// Update a task
export const updateTask = async (id, taskData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error('Failed to update task.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete task.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
