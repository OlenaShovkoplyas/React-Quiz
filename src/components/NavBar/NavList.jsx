import React from 'react';
import './NavBar.css';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
import CasinoIcon from '@mui/icons-material/Casino';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function NavList() {
  const pages = ['About Quiz', 'Quiz Challenge', 'Saved Quizes', 'Contacts'];
  // eslint-disable-next-line react/jsx-key
  const icons = [<RoofingSharpIcon/>, <CasinoIcon/>, <FavoriteBorderIcon/>, <ConnectWithoutContactIcon/>];

  return (
    <List className="burgerList">
      {pages.map((page, index) => (
        <ListItem key={page} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              {icons[index]}
            </ListItemIcon>
            <ListItemText primary={page}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
