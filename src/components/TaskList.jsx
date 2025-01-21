import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from '@mui/material';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>
      <List>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <ListItem key={task._id}>
              <ListItemText
                primary={<Typography variant="h6">{task.title}</Typography>}
                secondary={
                  <Typography variant="body2">{task.description}</Typography>
                }
              />
              <Button
                onClick={() => onEdit(task)}
                variant="outlined"
                color="primary"
                sx={{ marginRight: 1 }}
              >
                Edit
              </Button>
              <Button
                onClick={() => onDelete(task._id)}
                variant="outlined"
                color="secondary"
              >
                Delete
              </Button>
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No tasks found.
          </Typography>
        )}
      </List>
    </div>
  );
};

export default TaskList;
