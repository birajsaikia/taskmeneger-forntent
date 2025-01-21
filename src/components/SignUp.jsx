import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import Cookies from 'js-cookie';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({ userid: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      const response = await axios.post(
        'https://taskmanager-backend-1-1mjl.onrender.com/api/tasks/user/register',
        formData
      );

      if (response.data.success) {
        setMessage('User registered successfully. Redirecting...');
        Cookies.set('token', response.data.token);
        Cookies.set('userid', response.data.userid1);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setMessage(response.data.message || 'Registration failed');
      }
    } catch (error) {
      setMessage('Error registering user. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          Sign Up
        </Typography>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            {message && (
              <Typography
                color={message.includes('successfully') ? 'green' : 'error'}
                variant="body2"
                mt={2}
              >
                {message}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 3 }}
            >
              Sign Up
            </Button>
          </form>
          <Typography mt={2}>
            Already have an account? <a href="/signin">Login in</a>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUp;
