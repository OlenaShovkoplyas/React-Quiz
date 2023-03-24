import { Component } from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export  default class  AsideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }    
  // const [anchorEl, setAnchorEl] = React.useState(null);
 
  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });   
  }
  
  render() {
    const pages = ['About Quiz', 'Quiz Challenge', 'Saved Quizes', 'Contacts'];
    const icons = [<RoofingSharpIcon/>, <CasinoIcon/>, <FavoriteBorderIcon/>, <ConnectWithoutContactIcon/>];
    const open = Boolean(this.state.anchorEl);

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
          anchorEl={this.state.anchorEl}
          open={open}
          onClose={this.handleClose}
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
              onClick={this.handleClose}
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
}
