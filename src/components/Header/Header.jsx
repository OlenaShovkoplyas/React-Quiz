import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Header.css';
import React from "react";


export default function Header() {
    return ( 
        <> 
        <ButtonGroup className='btn'>           
            <Button sx={{color: 'green'}} className='btn1'>Registration</Button>            
        </ButtonGroup>
        <ButtonGroup className='btn'>           
            <Button sx={{color: 'green'}}>Log In</Button>            
        </ButtonGroup>
        </>
      )
}
