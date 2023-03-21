import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export  default function  AsideBar () {
  const pages = ['About Quiz', 'Quiz Challenge', 'Saved Quizes', 'Contacts'];
  const icons = [<RoofingSharpIcon/>, <CasinoIcon/>, <FavoriteBorderIcon/>, <ConnectWithoutContactIcon/>];  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <nav>
      <Button        
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: 'white'}}
      >
        <MenuIcon />
      </Button>
      <Menu        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
            backgroundColor: '#252422',
            color: 'white',
          }
        }}
      >
        {pages.map((page, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            {icons[index]}{page}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  )
}
