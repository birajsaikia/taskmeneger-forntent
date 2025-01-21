import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Log out logic
      Cookies.remove('token');
      Cookies.remove('userid');
      setIsLoggedIn(false);
      navigate('/signin');
    } else {
      navigate('/signin');
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Management
        </Typography>
        <Button color="inherit" onClick={handleAuthAction}>
          {isLoggedIn ? 'Log Out' : 'Sign In'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
