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

const SignInPage = () => {
  const [formData, setFormData] = useState({ userid: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle sign-in form submission
  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    const { userid, password } = formData;

    if (!userid || !password) {
      setErrorMessage('Please enter both username and password');
      return;
    }

    try {
      const response = await axios.post(
        'https://taskmanager-backend-1-1mjl.onrender.com/api/tasks/user/login',
        { userid, password }
      );
      if (response.data.success) {
        Cookies.set('token', response.data.token);
        Cookies.set('userid', response.data.userid);
        navigate('/');
        window.location.reload();
      } else {
        setErrorMessage(response.data.msg || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('Error occurred while logging in');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          Sign In
        </Typography>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <form onSubmit={handleSubmitSignIn}>
            <TextField
              label="User ID"
              name="userid"
              value={formData.userid}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            {errorMessage && (
              <Typography color="error" variant="body2" mt={2}>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 3 }}
            >
              Sign In
            </Button>
          </form>
          <p>
            dont have aecount <a href="./signup">Sign up</a>
          </p>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignInPage;
