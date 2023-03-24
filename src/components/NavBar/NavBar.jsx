import { Component } from "react";
import { useState } from 'react';
import { Button, Drawer, Box, } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import NavList from "./NavList";
import './NavBar.css';

export  default class NavBar extends Component {
// const [open, setOpen] = useState(false);
constructor(props) {
  super(props);
  this.state = {
    open: false,
  }
  this.setOpen = this.setOpen.bind(this);
}

setOpen(state) {
  this.setState({
    open: state,
  });
}

render() {
  return (
    <nav className="burgerBtn">
      <Button 
        onClick={() => this.setOpen(true)} 
        sx={{color: 'white'}}
      >
      <MenuIcon />
      </Button>
      <Drawer 
        anchor='left'
        open={this.state.open}
        onClose={() => this.setOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => this.setOpen(false)}
          onKeyDown={() => this.setOpen(false)}
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
    )
  }
}
