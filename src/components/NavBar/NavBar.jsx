import React, { useState } from 'react';
import { Button, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavList from './NavList';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="burgerBtn">
      <Button
        onClick={() => setOpen(true)}
        sx={{ color: 'white' }}
      >
      <MenuIcon />
      </Button>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          sx={{
            height: '100%',
            width: '250px',
            backgroundColor: '#286b5598',
            color: '#17342af2',
          }}
        >
            <NavList />
        </Box>
      </Drawer>
    </nav>
  );
}
