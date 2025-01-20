import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            TaskManager
          </Typography>
          <Button color="inherit" variant="outlined">
            Sign In
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
